import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Search from './Search';

export default { title: 'Search', decorators: [withKnobs] };

export const Component = () => <Search getUserData={searchGitHub} />;

const baseUrl = '';

async function searchGitHub(search) {
  const response = await fetch(`${baseUrl}${encodeURIComponent(search)}`);
  const result = await response.json();
  return result;
}
