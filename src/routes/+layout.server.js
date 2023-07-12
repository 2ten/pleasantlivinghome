import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, params, request, url }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const main_menu = await client.getByUID('menu', 'main-menu');
  const footer_menu = await client.getByUID('menu','footer-menu');
  const settings = await client.getSingle('settings');
  const { pathname } = url


  // todo does this need to be wrapped in if
  return { 
    main_menu, 
    footer_menu, 
    pathname,
    settings
  };

  error(404, 'Not found');
}
