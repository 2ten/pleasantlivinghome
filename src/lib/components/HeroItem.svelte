<script>
	export let item;
	import * as prismic from '@prismicio/client';
</script>

<div class="hero-item">
  {#if item.image.url}
  <div class="hero-image">
    <img  
    src={prismic.asImageSrc(item.image)}
    srcset={prismic.asImageWidthSrcSet(item.image,{widths: [320, 640, 828, 1200]}).srcset} 
    sizes="(min-width: 769px) 50vw,100vw"
    alt={item.image.alt} 
    loading="lazy"
    />
  </div>
  {/if}
  <a class="hero-caption--wrap" href="{prismic.asLink(item.link)}">
    <div class="hero-caption">
      <h1>{@html prismic.asText(item.heading)}</h1>
    </div>
  </a>
</div>
<style>
.hero-item{
  position:relative;
  margin-bottom: 6px;
}
.hero-image{
  aspect-ratio:3/2;
}
.hero-image img {
  display:block;
  margin:0;
  width:100%;
  height:100%;
  object-fit:cover;
}
.hero-caption--wrap{		
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display:flex;
  align-items:center;
  justify-content:space-around;
}
.hero-caption--wrap:hover:after{
  opacity:0.5
}
.hero-caption--wrap:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.25);
    z-index: 1;
    transition:all 0.5s ease;
}
.hero-caption{
  color:white;
  text-align:center;
  position:relative;
  z-index:2;
}
.hero-caption h1 {
  font-size: 2em;
  margin: 0;
  padding: 1em;
}
@media(min-width:769px){
	.hero-item{
    flex:0 0 calc(50% - 4px);
    margin-bottom:0;
	}
  .hero-image{
    aspect-ratio:unset;
    height:100%;
  }
}
</style>


