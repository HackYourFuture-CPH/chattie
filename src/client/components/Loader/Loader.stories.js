import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Loader from './Loader';

export default { title: 'Loader', decorators: [withKnobs] };

export const Component = () => (
  <Loader loadingText={text('LoadingText', 'Loaaaaaaaading')} />
);
