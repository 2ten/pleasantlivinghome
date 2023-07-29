<script>
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  {#if data.description}
  <meta name="description" content={data.description}>
  {/if}
  <meta property="og:title" content={data.title}>
  <meta property="og:url" content={$page.url}>
  <meta property="og:type" content="website" />
  {#if data.og_image}
  <meta property="og:image" content={data.og_image}>
  {/if}
  {#if data.description}
  <meta property="og:description" content={data.description} />
  {/if}
	<link rel="canonical" href={$page.url} />
</svelte:head>