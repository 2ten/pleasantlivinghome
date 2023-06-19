<script>
  export let slice;
	import * as prismic from '@prismicio/client';
	// set container from slice label
	let gap = 'gap';
	if(slice.slice_label){
		gap += ' gap--' + slice.slice_label;
	}
</script>
<div class="image-gallery {gap}">
  {#each slice.items as item, i}
    <div class="image-gallery--item width--{item.image_width}">    
      <img  
        src={prismic.asImageSrc(item.gallery_image)}
        srcset={prismic.asImageWidthSrcSet(item.gallery_image).srcset} 
        alt={item.gallery_image.alt} 
      />
    </div>
  {/each}
</div>
<style>
img{
  display:block;
}
.image-gallery{
  display:flex;
  flex-wrap:wrap;
}
@media(min-width:769px){
  .width--100{
    width:100%
  }
  .width--75{
    width:75%
  }
  .width--67{
    width:66.66%
  }
  .width--50{
    width:50%
  }
  .width--33{
    width:33.33%
  }
  .width--25{
    width:25%
  }
}
</style>