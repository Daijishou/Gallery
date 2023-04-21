<script>
    import { onMount, tick } from 'svelte';
    import { rawSourceUri } from '../constants';
	import WallpapersPackListItem from "./WallpapersPackListItem.svelte";

	let items;
	let scrollYRestored = false;
	let searchTerm="";
	async function restoreScrollY() {
		await tick();
		let scrollY = localStorage.getItem('mainPageScrollY');
		window.scrollTo(0, scrollY)
		scrollYRestored = true
	}
    onMount(async () => {
   		if(items == null) fetch(`${rawSourceUri}/themes/platform_wallpapers_packs/index.json`)
			.then(r => r.json())
			.then(data => {
				items = data.platformWallpapersPackList;
				window.baseUri = data.baseUri;
				restoreScrollY();
			
			});
		else restoreScrollY();
    });

	function onWindowScroll() {
		if(!scrollYRestored) return;
		localStorage.setItem('mainPageScrollY', window.scrollY);
	}

	function search() {
		window.scrollTo(0, 0)
	}
</script>

<svelte:window
	on:scroll={onWindowScroll}
/>
<h1 id="title">Daijishō Wallpapers Packs</h1>
<div class="search-container">
	<input type="text" 
		id="search-field" 
		placeholder="Search" 
		autocomplete="off"
		bind:value={searchTerm}
		on:input={search} />
</div>
{#if items}
	{#each items as item}
		{#if searchTerm.length<=1}
			<WallpapersPackListItem {item} />
		{:else if item.platformWallpapersPackName.toLowerCase().includes(searchTerm.toLowerCase())}
			<WallpapersPackListItem {item} />
		{/if}
	{/each}
{:else}
	<p class="loading">Fetching index…</p>
{/if}

<style>
	#title {
		padding: 24px 32px 0px 32px;
		font-size: x-large;
	}

	#search-field {
		width: auto;
		font-size: 1.3rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0;
		background-color: rgba(255, 255, 255, 0.25);
		color: white;
	}
	::placeholder {
		color: white;
	}
	div.search-container {
		width: 100%;
		padding: 0px 32px 24px 32px;
		box-sizing: border-box;
		border-bottom: 1px solid gray;
	}
	p.loading {
		padding: 12px 32px 12px 32px;
	}
</style>