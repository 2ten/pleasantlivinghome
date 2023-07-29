<script>
export let data
import { fade,fly } from 'svelte/transition'
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import Seo from '$lib/components/Seo.svelte';
import { page } from '$app/stores';
import * as prismic from '@prismicio/client';

// import fonts using fontsource package
import "@fontsource/jost/latin-200.css";
import "@fontsource/jost/latin-300.css";
import "@fontsource/jost/latin-400.css";
import "@fontsource/epilogue/latin-200.css";
import "@fontsource/epilogue/latin-700.css";
import '/src/styles/normalize.css'
import '/src/styles/main.css'

// reactive pathname, ensures pathname changes when users navigates site
$: pathname = data.pathname;

// site title from settigns
let site_title = '';
if(data.settings.data.site_title && data.settings.data.site_title.length){
	site_title = data.settings.data.site_title + ' - ';
}

// og_image from settings
let og_image = '';
if(data.settings.data.og_image && data.settings.data.og_image.url){
	og_image = prismic.asImageSrc(data.settings.data.og_image);
}

// og_image from document, overrides from settings
if($page.data.document.data.og_image && $page.data.document.data.og_image.url){
	og_image = prismic.asImageSrc($page.data.document.data.og_image);
}

// page title and meta description
// must be reactive to change as user navigates
let page_title,meta_description;
$: page_title = $page.data.document.data.page_title ? $page.data.document.data.page_title : site_title + prismic.asText($page.data.document.data.title);

$: meta_description = $page.data.document.data.meta_description;

$: og_image = og_image;

// logo and url from settings for Structured Data
// todo finish this
let logo_image, website_url;
if(data.settings.data.logo_image && data.settings.data.logo_image.url){
	logo_image = prismic.asImageSrc(data.settings.data.logo_image);
}
if(data.settings.data.website_url){
	website_url = data.settings.data.website_url;
}
</script>

<Seo data={{ title: page_title, description: meta_description, og_image: og_image, logo: logo_image, url: website_url }} />

<div class="page">
<Header data={data.main_menu.data} />
<main class="main-content">
<slot />
</main>
<Footer data={data} />
</div>