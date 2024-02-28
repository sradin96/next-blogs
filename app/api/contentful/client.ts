const contentful = require('contentful');
import { createClient } from 'contentful-management';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const managementClient = createClient({
  accessToken: `${process.env.CONTENTFUL_MANAGMENT_TOKEN}`,
});

export const connectContentClient = async () => {
  const space = await managementClient.getSpace(
    `${process.env.CONTENTFUL_SPACE_ID}`
  );
  return await space.getEnvironment('master');
};

export const environment = await managementClient
  .getSpace(`${process.env.CONTENTFUL_SPACE_ID}`)
  .then((space) => space.getEnvironment('master'));
