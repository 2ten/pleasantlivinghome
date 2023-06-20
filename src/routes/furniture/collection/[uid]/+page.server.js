import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getByUID('collection', uid);

  // todo - can document.id just be used here or do we need to wait for it
  const filters = [];
  filters[0] = prismic.filter.at('my.furniture.collection', document.id);
  const products = await client.getByType('furniture', {
    filters: filters,
    orderings: {
      field: 'my.furniture.order',
      direction: 'asc',
    },
  });

  if (document) {
    return {
      document,
      products,
    };
  }

  error(404, 'Not found');
}
