<script>
	export let slice;
	import * as prismic from '@prismicio/client';

	// set container from slice label
	let container = 'container'
	if(slice.slice_label){
		container += ' container--' + slice.slice_label
	}
</script>

<section class="section-text">
	<div class="{container}">
		{@html prismic.asHTML(slice.primary.section_title)}
		{@html prismic.asHTML(slice.primary.section_text)}
		{#if slice.items && prismic.asText(slice.items[0]) }
		<ul class="list-items">
		{#each slice.items as item, index}
			<li class="item" key={`item-${index}`}>
			<p>{@html prismic.asHTML(item.section_bulletpoint)}</p>
			</li>
		{/each}
		</ul>
		{/if}
	</div>
</section>
	
