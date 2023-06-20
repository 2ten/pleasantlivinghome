<script>
  export let data

	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
  <meta name="description" content={prismic.asText(data?.document?.data?.description)}>
</svelte:head>

{#if data && data.document}
<section class="press-gallery">
  <div class="container container--medium">
    <SliceZone slices={data.document.data.body} {components} />
  </div>
</section>
{/if}
<style>
.press-gallery{
  margin-top:100px;
}
</style>