import * as prismic from '@prismicio/client';
import { ACCESS_TOKEN } from '$env/static/private';

const repoName = 'pleasantlivinghome'; // Fill in your repository name
const accessToken = ACCESS_TOKEN; // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.

// 2ten note 
// /furniture, /interior-design, /press
// routing those pages to custom folders with their own +page.server.js files
// before the default page route takes effect
const routes = [
  {
    type: 'page',
    uid: 'home',
    path: '/',
  },
  {
    type: 'page',
    uid: 'furniture',
    path: '/furniture',
  },
  {
    type: 'page',
    uid: 'interior-design',
    path: '/interior-design',
  },
  {
    type: 'page',
    uid: 'press',
    path: '/press',
  },
  {
    type: 'page',
    uid: 'contact',
    path: '/contact',
  },
  {
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'furniture',
    path: '/furniture/:uid',
  },
  {
    type: 'project',
    path: '/interior-design/:uid',
  },
  {
    type: 'collection',
    path: '/furniture/collection/:uid',
  },
  {
    type: 'press',
    path: '/press/:uid',
  },
];

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  };
  const client = prismic.createClient(repoName, clientOptions);

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client;
};

export default createClient;
