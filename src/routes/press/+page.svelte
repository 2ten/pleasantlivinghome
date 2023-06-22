<script>
  export let data
	import * as prismic from '@prismicio/client';
</script>

{#if data && 'press' in data}
<section class="press-heading">
  <div class="container container--medium">
    <h1 class="title">{@html prismic.asText(data.document.data.title)}</h1>
  </div>
</section>
<section class="press-grid--wrap">
  <div class="container container--medium">
    <div class="press-grid">
    {#each data.press as press}
      <div class="press-grid--item"> 
        <a href="{prismic.asLink(press)}" class="press-grid--link">
        {#if 'image' in press.data && JSON.stringify(press.data.image) != "{}"}
        <img  
        src={prismic.asImageSrc(press.data.image,{fit:'clip',w:320})}
        srcset={prismic.asImageWidthSrcSet(press.data.image,{widths: [320,640,828]}).srcset}
        alt={press.data.image.alt} 
        /> 
        {/if}
        </a>
      </div>
    {/each}
    </div>
  </div>
</section>
{/if}
<style>
.press-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin:0 0 24px;
}
.press-grid--item{
  text-align:center;
}
.press-grid--link{
  display:block;
}
.press-grid--link img{
  transition:opacity 0.5s ease;
}
.press-grid--link:hover img{
  opacity:0.9;
}
@media(min-width:769px){
  .press-grid{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 36px;
    margin:0 0 36px;
  }
}
</style>