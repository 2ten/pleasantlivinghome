<script>
  export let data;
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
	import * as prismic from '@prismicio/client';
</script>

{#if data && data.document}
  <SliceZone slices={data.document.data.body} {components} />
{/if}
