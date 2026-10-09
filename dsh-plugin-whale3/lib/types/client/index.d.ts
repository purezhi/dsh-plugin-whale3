/**
 * Type declarations for the browser half of `@purezhi/dsh-plugin-whale3`
 * (`@purezhi/dsh-plugin-whale3/client`).
 *
 * This module mounts the whale: it injects its own DOM and styles, swims across
 * the top of the interface, handles dragging and right-click shape cycling, and
 * registers the configuration pages shown on the plugin's page in the Plugin
 * Manager. Everything it owns is released when its fiber is disposed.
 */

/** The subset of the browser plugin context this module uses. */
export interface Whale3ClientContext {
  /** Register a disposer that runs when the plugin is disabled or reloaded. */
  effect?(callback: () => unknown, label?: string): unknown;
  /** Fallback lifecycle hook used when `effect` is unavailable. */
  on?(event: "dispose", callback: () => void): unknown;
  /** Wait for a service before running the callback. */
  inject?(deps: string[], callback: (ctx: unknown) => unknown): unknown;
  /** The options surface the browser context is created with. */
  fiber?: unknown;
  /** Shared configuration form service, when the deployment provides it. */
  configForms?: unknown;
  /** Remote settings namespace, when the deployment provides it. */
  remote?: unknown;
  /** Plugin-page slot registry. */
  slots?: unknown;
}

/**
 * Mount the whale in the current document and register its configuration pages.
 * Safe to call again after a reload: the previous instance's DOM is removed by
 * its disposer, and this call claims the slot registrations once more.
 */
export declare function apply(ctx: Whale3ClientContext): void;
