import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/AdminHomePage/AdminHomePage';
import { MemoryRouter } from 'react-router';

describe('<Admin HomePage />', () => {
  test('fe_react_adminHomePage', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const addProductButton = screen.getByTestId('addProductButton');
    const adminProductButton = screen.getByTestId('adminProductButton');

    expect(addProductButton).toBeTruthy();
    expect(adminProductButton).toBeTruthy();
  });
});