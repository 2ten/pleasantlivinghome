<script>
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  {#if data.description}<meta name="description" content={data.description}>{/if}
	<link rel="canonical" href={$page.url} />
</svelte:head>