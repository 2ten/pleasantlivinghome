<script>
	export let data;
	import * as prismic from '@prismicio/client';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import logo from '$lib/assets/logo-pleasantlivinghome.png';

	let active = false;
	$: $page.url && (active = false)
</script>
<header class="main-header">
	<div class="main-header--wrap">
		<div class="logo">
			<a href="/"><img src="{logo}" alt="Pleasant Living Home" /></a>
		</div>
		{#if data.items}
		<button class="main-nav--toggle" 
			id="menuToggle" 
			role="button" 
			aria-expanded="false" 
			aria-controls="mainNav" 
			aria-label="Open navigation and skip to navigation" 
			data-label-active="Close"
			data-label="Menu"
			class:active
			on:click={() => active = !active} >Menu</button>

			<nav class="main-nav--desktop">
				<ul class="main-nav--list" role="navigation">
					{#each data.items as item}
						{@const activeLink = item.link.url === $page.url.pathname}
						<li class="main-nav--item">
						{#if activeLink}
							<span class="main-nav--link">{item.name}</span>
						{:else}
							<a href={prismic.asLink(item.link)} class="main-nav--link">{item.name}</a>
						{/if}
						</li>
					{/each}
				</ul>
			</nav>
			{/if}	
	</div>
</header>
{#if active}
{#if data.items}
<nav transition:fade class="main-nav main-nav--mobile" id="mainNav">
	<ul class="main-nav--list" role="navigation">
		{#each data.items as item}
			{@const activeLink = item.link.url === $page.url.pathname}
			<li class="main-nav--item">
			{#if activeLink}
				<span class="main-nav--link">{item.name}</span>
			{:else}
				<a href={prismic.asLink(item.link)} class="main-nav--link">{item.name}</a>
			{/if}
			</li>
		{/each}
	</ul>
</nav>
{/if}
{/if}