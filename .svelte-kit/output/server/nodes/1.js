

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DEk-ZS4_.js","_app/immutable/chunks/scheduler.D-NikIHS.js","_app/immutable/chunks/index.Bl32-MSW.js","_app/immutable/chunks/entry.CcO3O5C4.js"];
export const stylesheets = [];
export const fonts = [];
