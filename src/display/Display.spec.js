import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Display from './Display'
import { getByText } from '@testing-library/dom';

//displays if gate is closed or opened
//or if lock is locked or unlocked

test('Display is rendering', () => {
    render(<Display />)
})


//checks open or close, locked or unlocked
test('Displays open or closed', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();
    const { getByText } = render(<Display closed={closedMock} locked={lockedMock} />)

    lockedMock ? getByText(/locked/i) : getByText(/unlocked/i);
    closedMock ? getByText(/closed/i) : getByText(/open/i);
})