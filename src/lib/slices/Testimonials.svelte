<script>
  export let slice;
	import * as prismic from '@prismicio/client';
</script>
<section class="testimonials">
  <div class="container">
    <div class="section-heading">
      {@html prismic.asHTML(slice.primary.title)}
    </div>
    <div class="testimonials-list">
    {#each slice.items as item}
      <div class="testimonials-item">  
        <div class="testimonials-name">{@html prismic.asText(item.name)}</div> 
        <p>{@html prismic.asText(item.quote)}</p>
        <a href="{prismic.asLink(item.link)}" target="_blank">Read more</a>
      </div>
    {/each}
    </div>
  </div>
</section>
<style>
.testimonials-item{
  margin-bottom:50px;
}
.testimonials-name{
  font-weight:700;
  margin-bottom:5px;
}
p{
  margin-bottom:5px
}
.testimonials-item a{
  font-weight:700
}
</style>