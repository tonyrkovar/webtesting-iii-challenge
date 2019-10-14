import React from 'react';

import { render } from '@testing-library/react';

import Dashboard from './Dashboard'
import Controls from '../controls/Controls';

test('shows Dashboard', () => {
    render(<Dashboard />)
})

test('Shows controls', () => {
    render(<Controls />)
})
