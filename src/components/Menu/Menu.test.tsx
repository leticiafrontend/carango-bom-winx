import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Menu } from './Menu'

describe('Menu component', () => {
  it('Deve carregar um conteudo dentro do menu', () => {
    render(
      <BrowserRouter>
        <Menu>
          <h1 data-testid="dash-test">oi</h1>
        </Menu>
      </BrowserRouter>,
    )
    const dash = screen.getByTestId('dash-test')
    expect(dash).toBeTruthy()
  })
})
