<script>
  export let slice;
  import PageBanner from '$lib/components/PageBanner.svelte';
	import * as prismic from '@prismicio/client';
</script>

<PageBanner title={slice.primary.heading} description={slice.primary.text} image={slice.primary.image} />