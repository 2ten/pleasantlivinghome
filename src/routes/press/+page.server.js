import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getByUID('page', 'press');

  // in the template if using getByType must reference data.press.results
  const press = await client.getAllByType('press', {
    orderings: {
      field: 'my.press.order',
      direction: 'asc',
    },
  });

  if (!document) {
    throw error(404, {
      message: 'Not found',
    });
  }

  return {
    document,
    press,
  }

}
