import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getByUID('page', 'furniture');

  const type = 'collection'

  const orderings = [{
    field: 'my.collection.order',
    direction: 'asc',
  }]

  const items = await client.getAllByType(type, {
    orderings: orderings
  });

  if (!document) {
    throw error(404, {
      message: 'Not found',
    });
  }

  return {
    document,
    items,
  };
}
