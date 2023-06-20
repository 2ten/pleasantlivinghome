<script>
  export let data
	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
  import Social from '$lib/components/Social.svelte';
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
  <meta name="description" content={prismic.asText(data?.document?.data?.description)}>
</svelte:head>

{#if data && data.document}
<div class="interior-design">
  <div class="description--column">
    <div class="description">
      <h1 class="title">{@html prismic.asText(data.document.data.title)}</h1>
      <div class="details">
        {#if data.document.data.type && data.document.data.location}
        <ul>
          {#if data.document.data.type}<li><span>Project type:</span> {@html data.document.data.type}</li>{/if}
          {#if data.document.data.location}<li><span>Location:</span> {@html data.document.data.location}</li>{/if}
        </ul>
        {/if}
        {@html prismic.asHTML(data.document.data.description)}
      </div>
      <div class="social">
        <Social />
      </div>
      <div class="back"><a class="btn" href="/interior-design">Back to Portfolio</div>
    </div>
  </div>
  <div class="gallery--column">
    <SliceZone slices={data.document.data.body} {components} />
  </div>
</div>
{/if}
<style>
.description--column{
  background: #f5f5f5;
  padding:36px 30px;
}
.description{
  border-top:solid 1px #f16722;
}
.title{
  font-size:1em;
  font-weight:400;
  margin:36px 0;
  padding:2px 6px;
  background: gray;
  color:white;
  display: inline-block;
}
.details{
  font-size:0.9em;
  padding-bottom:6px;
}
.details ul{
  padding:0 0 36px 0;
}
.details ul li span{
  display:inline-block;
  min-width:100px;
}
.details ul{
  margin:0;
  list-style:none;
}
.social{
  padding:36px 0;
  border-top:solid 1px #f16722;
  border-bottom:solid 1px #f16722;
}
.back{
  padding:36px 0;
}
@media(min-width:769px){
  .interior-design{
    display:flex;
    height:100%;
  }
  .description--column{
    flex:0 0 300px;
    padding:36px 24px;
  }
  .gallery--column{
    flex:1 1 auto;
  }
}
@media(min-width:1025px){
  .description--column{
    flex:0 0 340px;
    padding:36px 30px;
  }
}
</style>