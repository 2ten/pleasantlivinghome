import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const { uid } = params;
  const client = createClient({ fetch, request });
  const document = await client.getSingle('interior_design_listing');

  const projects = await client.getByType('project', {
    orderings: {
      field: 'my.project.order',
      direction: 'asc',
    },
  });

  if (document) {
    return {
      document,
      projects,
    };
  }

  error(404, 'Not found');
}
