<script>
  export let data

	import { SliceZone } from '@prismicio/svelte';
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
  import { dev } from "$app/environment"
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<div class="interior-design">
  <div class="description--column">
    <div class="description">
      <h1 class="title">{@html prismic.asText(data.document.data.title)}</h1>
      <div class="details">
        <ul>
          <li>Project type: {@html data.document.data.type}</li>
          <li>Location: {@html data.document.data.location}</li>
        </ul>
        {@html prismic.asHTML(data.document.data.description)}
      </div>
      <div class="social">
        <ul>
          <li>H</li>
          <li>F</li>
          <li>I</li>
          <li>B</li>
        </ul>
      </div>
      <div class="back"><a class="btn" href="/interior-design">Back to Portfolio</div>
    </div>
  </div>
  <div class="gallery--column">
    <SliceZone slices={data.document.data.body} {components} {dev} />
  </div>
</div>
{/if}
<style>
.description--column{
  background: #f5f5f5;
}
.description{
  padding:36px 30px;
}
.title{
  font-size:1em;
  font-weight:400;
  border-top:solid 1px #f16722;
  border-bottom:solid 1px #f16722;
  padding:36px 0;
}
.details{
  font-size:0.9em;
  padding-bottom:6px;
}
.details ul,
.social ul{
  margin:0;
  padding:36px 0;
  list-style:none;
}
.social{
  border-top:solid 1px #f16722;
  border-bottom:solid 1px #f16722;
}
.social ul{
  display:flex;
}
.back{
  padding:36px 0;
}
@media(min-width:769px){
  .interior-design{
    display:flex;
  }
  .description--column{
    flex:0 0 300px;
  }
  .description{
    padding:36px 24px;
  }
  .gallery--column{
    flex:1 1 auto;
  }
}
@media(min-width:1025px){
  .description--column{
    flex:0 0 340px;
  }
  .description{
    padding:36px 30px;
  }
}

</style>