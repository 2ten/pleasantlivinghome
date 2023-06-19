<script>
  export let data
  import { dev } from "$app/environment"
	import * as prismic from '@prismicio/client';
  import PageBanner from '$lib/components/PageBanner.svelte';
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<PageBanner title={data.document.data.title} description={data.document.data.description} image={data.document.data.image} />
{/if}
{#if data && 'products' in data}
<div class="container">
  <div class="product-grid">
    {#each data.products.results as product}
      <div class="product-grid--item"> 
        <a href="{prismic.asLink(product)}" class="product-grid--link">
        {#if 'image' in product.data && JSON.stringify(product.data.image) != "{}"}
        <img  
        src={prismic.asImageSrc(product.data.image)}
        srcset={prismic.asImageWidthSrcSet(product.data.image).srcset} 
        alt={product.data.image.alt} 
        /> 
        {/if}
        <h4 class="product-grid--title">{@html prismic.asText(product.data.title)}</h4>
        </a>
      </div>
    {/each}
  </div>
</div>
{/if}
<style>
.collection-header{
  padding-bottom:60px;
}
.collection-description{
  border-bottom:solid 1px #f16722;
}
.product-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin:0 0 24px;
}
.product-grid--item{
  text-align:center;
}
.product-grid--link{
  display:block;
}
.product-grid--link .product-grid--title{
  display:inline-block;
  position:relative;
}
.product-grid--link .product-grid--title:after{
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  height:1px;
  background:black;
  opacity:0;
  transition:all 0.5s ease;
}
.product-grid--link:hover .product-grid--title:after{
  opacity:1;
}
.product-grid--link img{
  transition:opacity 0.5s ease;
}
.product-grid--link:hover img{
  opacity:0.9;
}
@media(min-width:769px){
  .product-grid{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 36px;
    margin:0 0 36px;
  }
  .collection-header{
    width:67%;
    padding-bottom:100px;
  }
}
</style>