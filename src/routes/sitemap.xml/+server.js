import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';


function create_entry(domain, path, lastmod) {
    return `<url>
    <loc>${new URL(path, domain).href}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

export async function GET({ fetch, setHeaders, request }) {
    setHeaders({
        'Content-Type': 'application/xml'
    });

    const client = createClient({ fetch, request });

    const settings = await client.getSingle('settings');

    const domain = settings.data.website_url;

    // gets everything but limited to 100
    // probably need separate sitemap files for each type like shopify
    // using getAllByType
    const pages = await client.get({ 
        filters: [
          prismic.filter.any('document.type',["page","project","collection","press"]),
        ],
        orderings: {
          field: 'document.first_publication_date',
          direction: 'asc',
        },
        pageSize: 100
      });

    const pageEntries = pages.results.map((page) => create_entry(domain,page.url,page.last_publication_date));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageEntries.join('\n')}
</urlset>`;
    return new Response(sitemap);
}

