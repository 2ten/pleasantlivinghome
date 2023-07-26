<script>
	import { page } from "$app/stores";
  /* 
    this page will not work
    because the  { page } variable in layout.svelte throws a 500 error
    so the only way to get an actual 404 eror page to work
    is to somehow exclude the page variable stuff from layout or use conditional code

  */
</script>

<div class="container">
  <h1>Page Not Found</h1>
  <p>{$page.status}</p>
  <p>{$page.error.message}</p>
</div>