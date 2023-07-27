<script>
	export let data;
	import * as prismic from '@prismicio/client';
	export let date = new Date().getFullYear();
</script>

<footer class="main-footer">
	<div class="container">
		<nav class="footer-menu">
			{#if data.footer_menu && data.footer_menu.data.items}
			<ul>
				{#each data.footer_menu.data.items as item}
					{#if item.link.url}
						<li><a href={prismic.asLink(item.link)}>
							{item.name}
						</a></li>
					{/if}
				{/each}
			</ul>
			{/if}
			<span class="copy">&copy; {date} {data.settings.data.company_name.trim()}</span>
		</nav>
	</div>
</footer>

<style>
.main-footer{
	background:#efefef;
	padding:30px 0;
}
.footer-menu{
	text-align:center;
}
.footer-menu ul{
	margin:0 auto;
	padding:0;
	list-style:none;
	display:inline-block;
}
.footer-menu li,
.copy{
	display:inline-block;
	font-size:12px;
	margin:0 3px;
}
.footer-menu a,.copy{
	padding:5px 10px;
}
</style>
