<script>
  export let data
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
  import * as prismic from '@prismicio/client';
  import Card from '$lib/components/Card.svelte';
</script>

{#if data && data.document}
<SliceZone slices={data.document.data.body} {components} />
{/if}
{#if data && 'items' in data}
<section class="cards">
  <div class="container">
    <div class="cards-grid">
    {#each data.items as item}
      <Card title={item.data.title} image={item.data.image} link={item}  />
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
{/if}