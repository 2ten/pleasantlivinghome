<script>
  export let data;
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
	import * as prismic from '@prismicio/client';
  import Social from '$lib/components/Social.svelte';
</script>

{#if data && data.document}
  <SliceZone slices={data.document.data.body} {components} />
{/if}

<section class="contact">
  <div class="container container--small">
    <div class="contact-flex">
      <div class="contact-details">
        <h1 class="title">{@html prismic.asText(data.document.data.title)}</h1>
        <div class="description">
          {@html prismic.asHTML(data.document.data.description)}
          <hr class="divider--orange" />
          <ul class="contacts">
            <li>
              <span><svg class="svg-icon " style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M20 14.661l-4.345-2.17c-.174-.089-.379-.141-.597-.141-.434 0-.819.207-1.062.528l-.002.003-1.125 1.5c-.178.236-.429.409-.718.487l-.009.002c-.099.024-.212.038-.329.038-.197 0-.384-.039-.556-.11l.01.004c-1.473-.576-2.735-1.394-3.797-2.416l.004.004a10.025 10.025 0 01-2.251-3.593l-.022-.07c-.057-.157-.09-.338-.09-.526 0-.229.049-.447.136-.644l-.004.01c.097-.176.225-.324.379-.439l.004-.003L7.12 6c.32-.246.524-.629.524-1.06 0-.219-.053-.425-.146-.608l.003.008L5.335 0 .001 2.666c0 6.625 5.266 11.934 5.327 12 .068.061 5.373 5.334 12 5.334z"></path></svg></span>
              <span class="contact-label"><a href="tel:{data.settings.data.phone.trim()}" target="_blank">{data.settings.data.phone.trim()}</a></span>
            </li>
            <li>
              <span><svg class="svg-icon " style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M10 8.826l10-3V2.5H0v3.326l10 3z"></path><path d="M10 11.174l-10-3v8.076c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25V8.174z"></path></svg></span>
              <span class="contact-label"><a href="mailto:{data.settings.data.email.trim()}" target="_blank">{data.settings.data.email.trim()}</a></span>
            </li>
            <li>
              <span><svg class="svg-icon" style="fill:currentColor;font-size:1em" viewBox="0 0 20 20" width="1em" height="1em" focusable="false" aria-hidden="true" role="presentation"><path d="M17.5 7.5v-.005c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 3.146 1.937 5.84 4.683 6.953l.05.018L9.999 20l2.766-5.534c2.795-1.131 4.732-3.822 4.734-6.966zM10 4.615c1.593 0 2.885 1.292 2.885 2.885S11.593 10.385 10 10.385c-1.593 0-2.885-1.292-2.885-2.885 0-1.593 1.292-2.885 2.885-2.885z"></path></svg></span>
              <span class="contact-label"><a href="http://www.google.com/maps/place/{data.settings.data.location.latitude},{data.settings.data.location.longitude}" target="_blank">Our Location</a></span>
            </li>
          </ul>
        </div>
        <div class="social">
          <Social />
        </div>
      </div>
      <div class="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name<br><input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Your Email<br><input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Message<br><textarea name="message" required></textarea></label>
          </p>
          <p>
            <button type="submit" class="btn">Send</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
.contact{
  padding-bottom:60px;
}
.contact-form{
  padding-top:30px;
}
.contacts{
  list-style: none;
  margin:24px 0 18px;
  padding:0;
}
.contacts li{
  padding:9px 0;
}
.contact-label{
  padding-left:7px;
}
@media(min-width:1024px){
  .contact-flex{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .contact-flex div{
    flex: 0 0 47.5%;
  }
  .contact-form{
    padding-top:0;
  }
}
label{
  font-size:14px;
}
input,textarea{
  max-width:414px;
  width:100%;
  padding:5px;
}
textarea{
  min-height:120px;
}
p{
  margin-bottom:15px;
}
hr.divider--orange{
  height:1px;
  border:none;
  border-top:solid 1px #f16722;
  margin:0;
  padding:0;
}
.svg-icon{
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
  color:#f16722;
}
</style>