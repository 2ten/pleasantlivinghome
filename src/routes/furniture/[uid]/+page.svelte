<script>
  export let data
	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
  import PageBanner from '$lib/components/PageBanner.svelte';
</script>

{#if data && data.document}
<PageBanner title={data.document.data.title} description={data.document.data.description} image={data.document.data.image} className="product" />
<section class="product-gallery">
  <div class="container">
    <SliceZone slices={data.document.data.body} {components} />
  </div>
</section>
{/if}
<style>
.product-gallery .image-gallery--item{
  padding:18px;
  margin-top:100px;
}
.product-gallery .container{
  max-width:980px;
}
</style>