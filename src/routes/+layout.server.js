import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, request, url }) {
  const client = createClient({ fetch, request });
  const main_menu = await client.getByUID('menu', 'main-menu');
  const footer_menu = await client.getByUID('menu','footer-menu');
  const settings = await client.getSingle('settings');
  const { pathname } = url

  return { 
    main_menu, 
    footer_menu, 
    pathname,
    settings
  };

}
