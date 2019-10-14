import React from 'react';

import { render, fireEvenet } from '@testing-library/react';
import Controls from './Controls';
import { fireEvent } from '@testing-library/dom';

test('Control Renders', () => {
    render(<Controls />)
})

test('Toggle closed and Lock works', () => {
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)
    fireEvent.click(getByText(/unlock gate|lock gate/i));
    fireEvent.click(getByText(/open gate|close gate/i));

})