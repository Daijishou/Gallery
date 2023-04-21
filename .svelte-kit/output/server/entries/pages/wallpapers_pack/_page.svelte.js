import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/index.js";
const rawSourceUri = "https://raw.githubusercontent.com/TapiocaFox/Daijishou/main";
const WallpapersPackDetail_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-13388qk{padding:12px 32px 12px 32px;border-bottom:1px solid gray}div.wallpapers.svelte-13388qk{padding:0 32px 12px 32px}img.wallpaper.svelte-13388qk{max-width:800px;width:100%;border-radius:8px}a.back-link.svelte-13388qk{color:white}img.thubnail.svelte-13388qk{height:128px;width:128px;border-radius:8px;box-shadow:0 3px 8px 0 rgba(0, 0, 0, 0.25), 0 3px 20px 0 rgba(0, 0, 0, 0.19);object-fit:cover}span.filename.svelte-13388qk{color:gray;font-size:small}",
  map: null
};
const WallpapersPackDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { slug } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css);
  return `<article class="svelte-13388qk"><p><a class="back-link svelte-13388qk" href="./">« back to list</a></p>
	${index.previewThumbnailFilename ? `<img class="thubnail svelte-13388qk" src="${escape(rawSourceUri, true) + "/themes/platform_wallpapers_packs/" + escape(slug, true) + "/" + escape(index.previewThumbnailFilename, true)}"${add_attribute("alt", index.platformWallpapersPackName, 0)}>` : `<img class="thubnail svelte-13388qk"${add_attribute("alt", index.platformWallpapersPackName, 0)}>`}
	<h1>${escape(index.name ? index.name : "Loading…")}</h1>
	${index.name ? `<p>Has default wallpaper: ${escape(index.hasDefaultWallpaper ? "yes" : "no")}${escape(index.isNSFW ? " • NSFW" : "")}</p>
		<p>${escape(index.description)}</p>` : ``}

	${index.authors && index.authors.length > 0 || index.sources && index.sources.length > 0 ? `<p class="authors">Authors: ${escape(index.authors.join(", "))}.<br>Sources: ${escape(index.sources.join(", "))}.</p>` : ``}</article>

<div class="wallpapers svelte-13388qk">${index.hasDefaultWallpaper ? `<h2>default</h2>
		<a href="${escape(rawSourceUri, true) + "/themes/platform_wallpapers_packs/" + escape(slug, true) + "/" + escape(index.defaultWallpaperFilename, true)}" target="_blank"><img class="wallpaper svelte-13388qk" src="${escape(rawSourceUri, true) + "/themes/platform_wallpapers_packs/" + escape(slug, true) + "/" + escape(index.defaultWallpaperFilename, true)}" alt="default"></a>
		<span class="filename svelte-13388qk">${escape(index.defaultWallpaperFilename)}</span>` : ``}
	${each(index.wallpaperList, (wallpaperMeta) => {
    return `<h2>${escape(wallpaperMeta.matchPlatformShortname)}</h2>
		<a href="${escape(rawSourceUri, true) + "/themes/platform_wallpapers_packs/" + escape(slug, true) + "/" + escape(wallpaperMeta.filename, true)}" target="_blank"><img class="wallpaper svelte-13388qk" src="${escape(rawSourceUri, true) + "/themes/platform_wallpapers_packs/" + escape(slug, true) + "/" + escape(wallpaperMeta.filename, true)}"${add_attribute("alt", wallpaperMeta.matchPlatformShortname, 0)}></a>
		<span class="filename svelte-13388qk">${escape(wallpaperMeta.filename)}</span>`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = {
    name: null,
    description: "Loading…",
    wallpaperList: [],
    authors: [],
    sources: []
  };
  let slug;
  return `${$$result.head += `<!-- HEAD_svelte-rytn9h_START -->${index.name ? `${$$result.title = `<title> ${escape(index.name)} </title>`, ""}` : ``}<!-- HEAD_svelte-rytn9h_END -->`, ""}

${index ? `${validate_component(WallpapersPackDetail, "WallpapersPackDetail").$$render($$result, { index, slug }, {}, {})}` : ``}`;
});
export {
  Page as default
};
