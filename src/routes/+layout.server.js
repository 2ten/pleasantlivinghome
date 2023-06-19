import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, params, request, url }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getAllByType('menu');
  const { pathname } = url


  if (document) {
    return { document, pathname};
  }

  error(404, 'Not found');
}
