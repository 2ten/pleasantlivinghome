<script>
export let data
import { fade,fly } from 'svelte/transition'
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import Seo from '$lib/components/Seo.svelte';
import { page } from '$app/stores';
import * as prismic from '@prismicio/client';

import "@fontsource/jost/latin-200.css";
import "@fontsource/jost/latin-300.css";
import "@fontsource/jost/latin-400.css";
import "@fontsource/epilogue/latin-200.css";
import "@fontsource/epilogue/latin-700.css";
import '/src/styles/main.css'

$: pathname = data.pathname;

let page_title,meta_description;

$: page_title = $page.data.document.data.page_title ? $page.data.document.data.page_title : prismic.asText($page.data.document.data.title);

$: meta_description = $page.data.document.data.meta_description;

</script>

<Seo data={{ title: page_title, description: meta_description }} />

<div class="page">
<Header data={data.main_menu.data} />
<main class="main-content">
<slot />
</main>
<Footer data={data.footer_menu.data}/>
</div>