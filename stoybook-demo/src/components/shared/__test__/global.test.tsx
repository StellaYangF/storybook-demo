import React from 'react';
import { render } from '@testing-library/react';
import { GlobalStyle } from '../global';

describe('test global style', () => {
  it('should render correct global style', () => {
    const wrapper = render(<GlobalStyle></GlobalStyle>);
    expect(wrapper).toMatchSnapshot();
  })
})