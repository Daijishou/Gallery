import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const WallpapersPackListItem_svelte_svelte_type_style_lang = "";
const WallpapersPackList_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.loading.svelte-1uvpyab{padding:12px 24px 12px 24px}",
  map: null
};
const WallpapersPackList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`<p class="loading svelte-1uvpyab">Loading...</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6ytk1g_START -->${$$result.title = `<title>Daijishō Wallpapers Packs</title>`, ""}<!-- HEAD_svelte-6ytk1g_END -->`, ""}
${validate_component(WallpapersPackList, "WallpapersPackList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
