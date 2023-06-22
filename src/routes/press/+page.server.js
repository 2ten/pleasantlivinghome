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
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  if (document) {
    return {
      document,
      press,
    };
  }

  error(404, 'Not found');
}
