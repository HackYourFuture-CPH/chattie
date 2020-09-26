import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'SearchMessages',
  component: SearchMessages,
  decorators: [withKnobs],
};

export const Component = () => <SearchMessages title="SearchMessage" />;
