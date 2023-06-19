<script>
  export let slice;
	import * as prismic from '@prismicio/client';
  import Card from '$lib/components/Card.svelte';
</script>
<section class="cards">
  <div class="container">
    <div class="cards-grid">
    {#each slice.items as item}
      <Card title={item.title} image={item.image} link={item.link}  />
    {/each}
    </div>
  </div>
</section>
<style>
.cards-grid{
  margin:0 auto 36px auto;
  max-width:600px;
}
@media(min-width:769px){
  .cards-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    max-width:none;
    margin:0 0 24px;
  }
}
@media(min-width:1025px){
  .cards-grid{
    grid-gap: 36px;
    margin:0 0 36px;
  }
}
</style>