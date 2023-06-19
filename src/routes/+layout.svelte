<script>
export let data
import { fade,fly } from 'svelte/transition'
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import "@fontsource/jost/latin-200.css";
import "@fontsource/jost/latin-300.css";
import "@fontsource/jost/latin-400.css";
import "@fontsource/epilogue/latin-200.css";
import "@fontsource/epilogue/latin-700.css";
import '/src/styles/main.css'

$: pathname = data.pathname
</script>
<div class="page">
<Header data={data}/>
<main>
<slot />
</main>
<Footer data={data}/>
</div>