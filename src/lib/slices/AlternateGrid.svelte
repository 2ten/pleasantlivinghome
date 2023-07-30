<script>
	export let slice
	import * as prismic from '@prismicio/client';
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
  let align = slice.primary.image_side

  //export let d = JSON.stringify(slice,null,2);

</script>
  <!-- <pre>{d}</pre> -->
<section class="alternate-grid">
  <div class="container"> 
    <div class="alternate-grid--container image-align--{align}">
      {#if 'optional_image' in slice.primary && JSON.stringify(slice.primary.optional_image) != "{}"}
      <div class="image-container" style="aspect-ratio:{slice.primary.optional_image.dimensions.width}/{slice.primary.optional_image.dimensions.height};max-width:{slice.primary.optional_image.dimensions.width}px;">
        <img  
          src={prismic.asImageSrc(slice.primary.optional_image)}
          srcset={prismic.asImageWidthSrcSet(slice.primary.optional_image,{widths: [320, 640, 828, 1200]}).srcset} 
          sizes="(min-width: 769px) 50vw,100vw"
          alt={slice.primary.optional_image.alt} 
        />
      </div>
      {/if}
      <div class="text-container">
        {@html prismic.asHTML(slice.primary.title)}
        {@html prismic.asHTML(slice.primary.description)}
      </div>
    </div>
  </div>
</section>
<style>
.alternate-grid--container{
  display: flex;
  flex-direction:column;
}
.image-container{
  order:1;
  margin:0 auto;
  width:100%;
}
.text-container{
  order:2;
  padding-top:36px;
}
@media(min-width:769px){
  .alternate-grid--container {
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
  }
  .image-align--right .image-container{
    order:2;
  }
  .image-align--right .text-container{
    order:1;
  }
  .image-container {
    flex-basis: calc(50% - 20px);
  }
  .text-container {
    flex-basis: calc(50% - 20px);
    margin-left: 20px;
    padding-top:0;
  }
}
.eyebrow-headline {
  text-transform: uppercase;
  margin-bottom: 10px;
}
.title {
  margin-bottom: 20px;
}
.description {
  margin-bottom: 40px;
}
</style>