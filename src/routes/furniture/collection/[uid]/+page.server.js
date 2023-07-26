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
  const products = await client.getAllByType('furniture', {
    filters: filters,
    orderings: {
      field: 'my.furniture.order',
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
    products,
  };
}
