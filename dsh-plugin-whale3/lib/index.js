/**
 * Whale companion plugin, node half.
 *
 * The browser half ships via exports["./client"] and is discovered through the
 * package.json dsh.client declaration; this half exposes the row's Config to it
 * over a same-origin route, because a client plugin cannot read host config
 * directly.
 *
 * ## Configuration
 *
 * Declared with the documented `export const Config` form, so the row's
 * `config` is validated at activation:
 *
 * ```yaml
 * - id: whale                     # id-targeted override of the bundle's row
 *   config:
 *     rightClickSwitch: true      # 右键点击是否切换形象（默认 true）
 * ```
 *
 * - `rightClickSwitch` (default `true`) — when false, right-clicking the whale
 *   no longer cycles humpback → blue whale → orca; double-click still resets to
 *   the humpback and dragging is unaffected.
 *
 * The field carries `.volatile()`, which is what puts it in a settings form:
 * the settings service projects only fields sitting under a volatile schema
 * node (dsh-settings `volatileForm`/`isVolatilePath`). A write reloads the row,
 * so the browser half and this route pick the new value up without a restart.
 *
 * The browser half ships its own configuration page on the Plugins page, so
 * `apply` also registers the documented `configure({ auto: false }, ctx.fiber)`
 * policy while the settings service exists. That only tells the Settings
 * inventory to list this entry read-only.
 */
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

export const name = "whale";
export const inject = ["webServer"];

// The Config schema needs @deepseek-ai/schemastery, which ships inside the dsh
// installation. Bare resolution can fail (a `link:`-installed plugin resolves
// against its realpath, so the profile's node_modules is not on the search
// chain, and a symlink into app.asar fails with ENOTDIR), so fall back to the
// running installation's own copy by absolute path. Without a schema the loader
// passes the raw config through, which `apply` honours anyway.
function schemaCandidates() {
  const out = [];
  const exec = process.execPath || "";
  if (exec) {
    const resources = join(dirname(dirname(exec)), "Resources");   // macOS layout
    for (const sub of ["app.asar", "app.asar.unpacked"]) {
      out.push(join(resources, sub, "dsh", "node_modules", "@deepseek-ai", "schemastery", "lib/index.mjs"));
      out.push(join(resources, sub, "node_modules", "@deepseek-ai", "schemastery", "lib/index.mjs"));
    }
    // Windows / Linux: <install>/resources/app.asar/...
    out.push(join(dirname(exec), "resources", "app.asar", "dsh", "node_modules", "@deepseek-ai", "schemastery", "lib/index.mjs"));
  }
  return out;
}

async function loadSchema() {
  try {
    return (await import("@deepseek-ai/schemastery")).default;
  } catch { /* fall through to the absolute-path candidates */ }
  for (const p of schemaCandidates()) {
    try {
      const mod = await import(pathToFileURL(p).href);
      if (mod && mod.default) return mod.default;
    } catch { /* try the next candidate */ }
  }
  return null;
}

const Schema = await loadSchema();

export const Config = Schema
  ? Schema.object({
      // volatile: the settings form edits this live, without a remount
      rightClickSwitch: Schema.boolean().default(true).volatile()
    })
  : undefined;

/**
 * Read a config field. A `.volatile()` field arrives as a cosmokit reference
 * whose snapshot is read with `.get()` (the pattern dsh-agent-default-model
 * uses); plain fields arrive as ordinary values. Comparing a reference with
 * `false` would always be true, silently ignoring the option.
 */
function configValue(value) {
  if (value && typeof value === "object" && typeof value.get === "function") {
    try {
      const unwrapped = value.get();
      if (unwrapped !== undefined) return unwrapped;
    } catch { /* not a readable reference: fall through to the raw value */ }
  }
  return value;
}

function apply(ctx, config) {
  const cfg = config || {};
  // A volatile-only config change is a value swap: the loader does NOT re-apply
  // the plugin, so a value read once here would stay stale until a restart.
  // Read it per request instead, which makes an edit in the settings form live.
  const currentRightClickSwitch = () => configValue(cfg.rightClickSwitch) !== false;

  // The browser half registers its own page on the Plugins page, so the
  // Settings inventory should list this entry without generating a page of its
  // own. `ctx.inject` creates a child fiber that waits for the service, so a
  // deployment without @deepseek-ai/dsh-settings is unaffected; the policy
  // names THIS row's fiber, because the settings service looks presentations up
  // by the profile entry's own fiber.
  try {
    ctx.inject(["settings"], (sctx) => {
      try {
        sctx.effect(
          () => sctx.settings.configure({ auto: false }, ctx.fiber),
          "whale: settings page policy"
        );
      } catch { /* a policy is already registered for this instance (reload race) */ }
    });
  } catch { /* no inject support: YAML and the Plugins page still configure the row */ }

  try {
    // The schema's volatile fields, reported alongside the effective value:
    // the settings inventory is browser-side, so this is what a reader (or a
    // read-only configuration page) can use to see whether a form can edit the
    // row at all.
    let configKeys = [];
    let configVolatile = [];
    try {
      const dict = (Config && Config.dict) || {};
      configKeys = Object.keys(dict);
      configVolatile = configKeys.filter((key) => !!dict[key]?.meta?.volatile);
    } catch (_) { /* no schema: the route still reports the effective value */ }

    // the browser half reads the effective value from here
    ctx.effect(() => ctx.webServer.register({
      kind: "exact",
      path: "/whale/config",
      handler: (_req, res) => {
        res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
        res.end(JSON.stringify({ rightClickSwitch: currentRightClickSwitch(), configKeys, configVolatile }));
      }
    }), "whale: effective config route");

    try {
      ctx.logger?.info?.(`whale: rightClickSwitch=${currentRightClickSwitch()} (resolved per request)`);
    } catch (_) { /* logging is best-effort */ }
  } catch (err) {
    try { ctx.logger.warn("whale: failed to register config route: " + String((err && err.message) || err)); } catch (_) {}
  }
}
export { apply };
