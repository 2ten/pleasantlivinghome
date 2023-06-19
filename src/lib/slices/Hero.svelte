<script>
	export let slice;
	import * as prismic from '@prismicio/client';
  import HeroItem from '$lib/components/HeroItem.svelte';
</script>

<section class="hero">
	<div class="hero-container">
    {#each slice.items as item}
      <HeroItem item={item} />
    {/each}
	</div>
</section>
  
<style>
.hero-container {
	width: 100%;
	max-width: 3960px;
	height: auto;
	position: relative;

}
@media(min-width:769px){
	.hero,.hero-container{
		height:100%;
	}
	.hero-container{
		display:flex;
		align-items:stretch;
		justify-content:space-between;
		flex-wrap:wrap;
	}
}
</style>