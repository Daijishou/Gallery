import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const WallpapersPackListItem_svelte_svelte_type_style_lang = "";
const WallpapersPackList_svelte_svelte_type_style_lang = "";
const css = {
  code: "#title.svelte-b2f2nx{padding:24px 32px 0px 32px;font-size:x-large}#search-field.svelte-b2f2nx{width:auto;font-size:1.3rem;border:1px solid gray;border-radius:5px;padding:8px;margin:0;background-color:rgba(255, 255, 255, 0.25);color:white}.svelte-b2f2nx::placeholder{color:white}div.search-container.svelte-b2f2nx{width:100%;padding:0px 32px 24px 32px;box-sizing:border-box;border-bottom:1px solid gray}p.loading.svelte-b2f2nx{padding:12px 32px 12px 32px}",
  map: null
};
const WallpapersPackList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  $$result.css.add(css);
  return `
<h1 id="title" class="svelte-b2f2nx">Daijishō Wallpapers Packs</h1>
<div class="search-container svelte-b2f2nx"><input type="text" id="search-field" placeholder="Search" autocomplete="off" class="svelte-b2f2nx"${add_attribute("value", searchTerm, 0)}></div>
${`<p class="loading svelte-b2f2nx">Fetching index…</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6ytk1g_START -->${$$result.title = `<title>Daijishō Wallpapers Packs</title>`, ""}<!-- HEAD_svelte-6ytk1g_END -->`, ""}

${validate_component(WallpapersPackList, "WallpapersPackList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
