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
        src={prismic.asImageSrc(item.gallery_image,{fit:'clip',w:640})}
        srcset={prismic.asImageWidthSrcSet(item.gallery_image,{widths: [640, 828, 1200, 1980]}).srcset} 
        sizes="(min-width: 769px) {item.image_width}vw,100vw"
        alt={item.gallery_image.alt} 
        loading="lazy"
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
.image-gallery--item{
  padding:0 0 6px 0;
}
.image-gallery--item img{
  width:100%;
  height:100%;
  object-fit: cover;
}
@media(min-width:769px){
  .image-gallery{
    padding-right:6px;
  }
  .image-gallery--item{
    padding:0 0 6px 6px;
  }
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