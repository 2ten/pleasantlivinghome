 <script>
	export let title,image,link;
	import * as prismic from '@prismicio/client';
</script>

<div class="card">
  <div class="card-body">
    {#if image  && JSON.stringify(image) != "{}"}
    <div class="card-image">
      <a href={prismic.asLink(link)}>
      <img  
      src={prismic.asImageSrc(image)}
      srcset={prismic.asImageWidthSrcSet(image).srcset} 
      alt={image.alt} 
      /></a>
    </div>
    {/if}
    <div class="card-caption">
      <a href={prismic.asLink(link)}><h3>{@html prismic.asText(title)}</h3></a>
      <a href={prismic.asLink(link)} class="btn">View Gallery</a>
    </div>
  </div>
</div>
<style>
.card{
  background: #f5f5f5;
  padding:20px 15px;
}
@media(max-width:768px){
  .card{
    margin-bottom:24px;
  }
}
.card-body{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.card-image{
  aspect-ratio:1;
  order:2;
  flex:0 0 48%;
}
.card-image img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-caption{
  flex:0 0 48%;
  order:1;
}
@media(min-width:540px){
  .card{
    padding:40px 30px;
  }
}
@media(min-width:769px){
  .card{
    padding:24px 16px;
  }
}
@media(min-width:1025px){
  .card{
    padding:40px 30px;
  }
}
</style>