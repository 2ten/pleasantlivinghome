<script>
  export let data

	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
  import PageBanner from '$lib/components/PageBanner.svelte';
  import { dev } from "$app/environment"
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<PageBanner title={data.document.data.title} description={data.document.data.description} image={data.document.data.image} className="product" />
<section class="product-gallery">
  <div class="container">
    <SliceZone slices={data.document.data.body} {components} {dev} />
  </div>
</section>
{/if}
<style>
.product-gallery .image-gallery--item{
  padding:18px;
}
</style>