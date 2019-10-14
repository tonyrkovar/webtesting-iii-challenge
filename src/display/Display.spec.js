import React from 'react';

import { render } from '@testing-library/react';

import Display from './Display'

//displays if gate is closed or opened
//or if lock is locked or unlocked

test('toggleLock is fired on click', () => {
    const toggleLockMock = jest.fn();
    const { getByText } = render(
        <Display loc456ked={toggleLockMock} />
    )
})