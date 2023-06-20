<script>
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
	import * as prismic from '@prismicio/client';
  export let data;
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
  <meta name="description" content={prismic.asText(data?.document?.data?.description)}>
</svelte:head>

{#if data && data.document}
  <SliceZone slices={data.document.data.body} {components} />
{/if}
