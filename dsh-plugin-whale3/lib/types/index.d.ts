/**
 * Type declarations for the server half of `@purezhi/dsh-plugin-whale3`.
 *
 * The plugin runs inside the DSH profile process and registers the route that
 * hands the browser half the configuration it cannot read by itself.
 */

/** Configuration declared by the plugin's schema; every field is optional. */
export interface Whale3Config {
  /**
   * Whether right-clicking the whale cycles through its shapes.
   * Defaults to `true`; when `false`, right-click is left to the browser.
   */
  rightClickSwitch?: boolean;
}

/** Route shape accepted by `ctx.webServer.register`. */
export interface Whale3Route {
  kind: "prefix" | "exact";
  path: string;
  handler(req: unknown, res: unknown): unknown;
}

/** Response body of `GET /whale/config`. */
export interface Whale3ConfigResponse {
  rightClickSwitch: boolean;
  /** Configuration keys this plugin exposes, in display order. */
  configKeys: string[];
  /** The subset of `configKeys` that updates live, without remounting the plugin. */
  configVolatile: string[];
}

/** The subset of the DSH plugin context this plugin uses. */
export interface Whale3Context {
  logger?: { info?(message: string): void; warn?(message: string): void };
  webServer?: { register(route: Whale3Route): unknown };
  effect?(callback: () => unknown, label?: string): unknown;
  inject?(deps: string[], callback: (ctx: Whale3Context) => unknown): unknown;
  fiber?: unknown;
}

/** Plugin name as registered with the DSH loader. */
export declare const name: "whale";
/** Services the plugin waits for before starting. */
export declare const inject: readonly string[];
/**
 * Schema describing the configuration fields shown in the Plugin Manager.
 * `undefined` when the bundled schema module cannot be resolved.
 */
export declare const Config: unknown;
/** Mount the plugin: serve the resolved browser-side configuration. */
export declare function apply(ctx: Whale3Context, config?: Whale3Config): void;
