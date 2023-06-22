import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getByUID('page', 'interior-design');

  const type = 'project'

  const orderings = [{
    field: 'my.project.title',
    direction: 'asc',
  }]

  const items = await client.getAllByType(type, {
    orderings: orderings
  });

  if (document) {
    return {
      document,
      items,
    };
  }

  error(404, 'Not found');
}
