<script>
  export let data
  import { dev } from "$app/environment"
	import * as prismic from '@prismicio/client';
  import PageBanner from '$lib/components/PageBanner.svelte';
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<PageBanner title={data.document.data.title} description={data.document.data.description} image={data.document.data.image} />
{/if}
{#if data && 'projects' in data}
<section class="cards">
  <div class="container">
    <div class="cards-grid">
    {#each data.projects.results as item}
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