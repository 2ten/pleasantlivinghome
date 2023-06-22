<script>
  export let data;
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
	import * as prismic from '@prismicio/client';
</script>

{#if data && data.document}
  <SliceZone slices={data.document.data.body} {components} />
{/if}

<div class="container container--small">
<form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</div>

