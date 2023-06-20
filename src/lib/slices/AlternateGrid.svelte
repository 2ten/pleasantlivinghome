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
        data-src={prismic.asImageSrc(slice.primary.optional_image)}
        data-srcset={prismic.asImageWidthSrcSet(slice.primary.optional_image).srcset} 
        alt={slice.primary.optional_image.alt} 
        use:lazyImage
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


<!-- data: The actual content of the document, which is an object containing several fields.
title: A list of one or more objects containing the page title, in this case it's just one object with a heading1 type and a text value of "About Us".
description: A list of one or more objects containing the page description, in this case it's two objects, the first one is a paragraph type with a custom label, and the second one is a normal paragraph type.
body: A list of one or more objects representing the page body, which is a combination of various content sections.
The first section is of type "alternate_grid", which includes an eyebrow_headline paragraph, a title heading1, a description paragraph, an optional_image with an associated image, and a image_side property set to "left".
The second section is of type "call_to_action", which includes an icon_image with an associated image, a title heading1, a paragraph text, a button_link object containing a link_type of "Web" and a url to Google, and a button_label with a text value of "Click here".
The third section is of type "our_work" and includes an eyebrow_headline paragraph, a title heading1, a description paragraph, and a list of items, where each item represents a project and includes an image with an associated image, a title heading3, and a content paragraph. -->