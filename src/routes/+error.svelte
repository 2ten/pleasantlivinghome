<script>
  import { dev } from "$app/environment";
	import { page } from "$app/stores";
</script>

<svelte:head>
  <title>404 Error</title>
</svelte:head>

<div class="container">
  <h1>+error.svelte</h1>
  <p>{$page.status}</p>
  <p>{$page.error.message}</p>
</div>