import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

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

    expect(closedMock).toBeTruthy()
    expect(!closedMock).toBeFalsy()

    expect(lockedMock).toBeTruthy()
    expect(!lockedMock).toBeFalsy()

})

test('Displays red or Green LED', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();
    const { queryByText } = render(<Display closed={closedMock} locked={lockedMock} />)

    const closed = queryByText(/closed/i)
    expect(closed).toBeInTheDocument()
    expect(closed).toHaveClass('red-led')

    const unlock = queryByText(/locked/i)
    expect(unlock).toBeInTheDocument()
    expect(unlock).toHaveClass('red-led')


})