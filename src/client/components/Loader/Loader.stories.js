import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Loader from './Loader';

export default { title: 'Loader', decorators: [withKnobs] };

export const Component = () => <Loader />;
