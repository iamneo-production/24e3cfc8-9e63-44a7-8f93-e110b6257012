import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Cart from '../../components/Cart/Cart';


describe('Cart Component', () => {
    
    const {container} = render(<MemoryRouter><Cart /></MemoryRouter>)

    test('fe_react_cart', () => {
       const  productCartBody = screen.queryByTestId('productCartBody');
       const  placeOrderButton = screen.queryByTestId('placeOrderButton');
	   
	   expect(productCartBody).toBeTruthy();
	   expect(placeOrderButton).toBeTruthy();
    })

})