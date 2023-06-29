import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getByUID('page', 'contact');

  if (!document) {
    throw error(404, {
      message: 'Not found',
    });
  }

  return { document };
}
