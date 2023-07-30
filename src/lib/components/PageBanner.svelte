<script>
	export let title,description,image;
  export let className;
	import * as prismic from '@prismicio/client';
</script>

<section class="page-header {className}">
  <div class="container">
    <div class="page-header--wrap">
      <div class="page-header--text">
        {@html prismic.asHTML(title)}
        {@html prismic.asHTML(description)}
      </div>
      {#if image && JSON.stringify(image) != "{}"}
      <div class="page-header--image">
        <img  
          src={prismic.asImageSrc(image)}
          srcset={prismic.asImageWidthSrcSet(image,{widths: [320, 640, 828]}).srcset} 
          sizes="(min-width: 769px) 25vw,50vw"
          alt={image.alt} 
        />
      </div>
      {/if}
  </div>
</section>
<style>
.page-header--image{
  max-width:414px;
  margin:0 auto;
}
.page-header--text{
  border-bottom:solid 1px #F16722;
}
.page-header--image{
  padding-top:36px;
}
@media(max-width:768px){
  .page-header--image{
    display:none;
  }
}
@media(min-width:769px){
  .page-header--wrap{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
  }
  .page-header--text{
    /* doing it this way instead of 1 1 auto in case there is no image like on the collection pages */
    flex:0 0 auto;
    padding:25px 0 0 0;
    margin-left:40px;
    margin-right:75px;
    width: calc(100% - 415px); /* width of image + marginLeft and marginRight */
  }
  .page-header--image{
    flex:0 0 300px;
    max-width:none;
    padding-top:0;
  }
  .product .page-header--text{
    width: calc(100% - 515px)
  }
  .product .page-header--image{
    flex:0 0 400px;
  }
}
</style>