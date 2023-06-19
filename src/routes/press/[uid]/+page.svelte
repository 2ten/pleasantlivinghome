<script>
  export let data

	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
  import { dev } from "$app/environment"
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<section class="press-gallery">
  <div class="container container--medium">
    <SliceZone slices={data.document.data.body} {components} {dev} />
  </div>
</section>
{/if}
<style>
.press-gallery{
  margin-top:100px;
}
</style>