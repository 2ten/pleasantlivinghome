<script>
  export let slice;
	import * as prismic from '@prismicio/client';
</script>
<section class="logos">
  <div class="container">
    <div class="section-heading">
      {@html prismic.asHTML(slice.primary.heading)}
    </div>
    <div class="logos-list--wrap">
      <ul class="logos-list">
      {#each slice.items as item}
        <li class="logos-item">    
          <img  
            src={prismic.asImageSrc(item.logo)}
            alt={item.logo.alt} 
            width={item.logo.dimensions.width}
            height={item.logo.dimensions.height}
          />
        </li>
      {/each}
      </ul>
    </div>
  </div>
</section>
<style>
.logos-list--wrap{
  text-align:center;
  padding:15px 0;
}
.logos-list{
  margin:0 auto;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}
.logos-item{
  flex:0 0 54px;
  padding:0 5px
}
</style>