import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="background"></div>
<main>${slots.default ? slots.default({}) : ``}</main>
<p class="copyright">copyright©2023 Daijishō wallpapers packs gallery, by MonkoftheFunk, TapiocaFox.</p>`;
});
export {
  Layout as default
};
