<script>
  export let data
	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
</script>

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
  padding-bottom:100px;
}
</style>