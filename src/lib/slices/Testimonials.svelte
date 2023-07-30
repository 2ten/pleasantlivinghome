<script>
  export let slice;
	import * as prismic from '@prismicio/client';
</script>
<section class="testimonials">
  <div class="container">
    <div class="section-heading">
      {@html prismic.asHTML(slice.primary.title)}
    </div>
    <div itemid="local-business-seo" itemscope="" itemtype="http://schema.org/LocalBusiness" class="testimonials-list">
    <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"><meta itemprop="ratingValue" content="5"><meta itemprop="reviewCount" content="8"></span>
    {#each slice.items as item}
      <article class="testimonials-item" itemid="review-seo-{item.id}" itemprop="review" itemscope="" itemtype="http://schema.org/Review">
        <header class="testimonials-header">
          <h4><span class="testimonials-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person"><span itemprop="name">{@html prismic.asText(item.name)}</span></span>
          <span aria-label="Average rating: 5 out of 5 stars" role="img" class="rating-stars site-template-reviews__review-item__rating" itemprop="reviewRating" itemscope="" itemtype="https://schema.org/Rating"><meta content="5" itemprop="ratingValue"><svg class="svg-icon star-icon fully-filled" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 0l3.125 6.875L20 7.5l-5 5 1.25 7.5L10 16.25 3.75 20 5 12.5l-5-5 6.875-.625L10 0z"></path></svg><svg class="svg-icon star-icon fully-filled" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 0l3.125 6.875L20 7.5l-5 5 1.25 7.5L10 16.25 3.75 20 5 12.5l-5-5 6.875-.625L10 0z"></path></svg><svg class="svg-icon star-icon fully-filled" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 0l3.125 6.875L20 7.5l-5 5 1.25 7.5L10 16.25 3.75 20 5 12.5l-5-5 6.875-.625L10 0z"></path></svg><svg class="svg-icon star-icon fully-filled" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 0l3.125 6.875L20 7.5l-5 5 1.25 7.5L10 16.25 3.75 20 5 12.5l-5-5 6.875-.625L10 0z"></path></svg><svg class="svg-icon star-icon fully-filled" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 0l3.125 6.875L20 7.5l-5 5 1.25 7.5L10 16.25 3.75 20 5 12.5l-5-5 6.875-.625L10 0z"></path></svg></span></h4>
        </header>
        <p itemprop="reviewBody">{@html prismic.asText(item.quote)}<br><a href="{prismic.asLink(item.link)}" target="_blank" rel="noopener noreferrer" class="read-more" aria-label="Read more"><b>Read Full Review</b><svg class="svg-icon icon-read-more" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M6.913 18.162l7.28-7.279c.226-.226.366-.539.366-.884s-.14-.658-.366-.884l-7.28-7.279-1.325 1.325 6.837 6.837-6.837 6.838z"></path></svg></a>
        </p>
      </article>
    {/each}
    </div>
  </div>
</section>
<style>
.testimonials-header h4{
  text-transform: none;
  font-family: Epilogue, Helvetica, Arial, sans-serif;
  letter-spacing: normal;
  font-weight:bold;
  margin-bottom:5px;
}
.testimonials-item{
  margin-bottom:25px;
}
.testimonials-name{
  font-weight:700;
}
.read-more{
  font-size:14px;
  padding-top:5px;
  display:inline-block;
}
p{
  margin-bottom:5px
}
.testimonials-item a{
  font-weight:700
}
.svg-icon{
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
.rating-stars{
  padding-left:10px;
}
.star-icon{
  font-size: 8px!important;
  width: 10px;
  margin-bottom: 0.25em;
  color:#F16722;
  display: inline-block;
  font-size: 1.5em!important;
  line-height: 0;
  position: relative;
  vertical-align: middle;
}
</style>


