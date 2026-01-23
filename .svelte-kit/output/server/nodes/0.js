

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D8a6zfS-.js","_app/immutable/chunks/sIloUZ-r.js","_app/immutable/chunks/CGmmsghJ.js","_app/immutable/chunks/DDZbv4JG.js"];
export const stylesheets = [];
export const fonts = [];
