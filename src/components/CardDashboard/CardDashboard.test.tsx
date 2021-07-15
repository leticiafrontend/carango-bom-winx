import React from 'react'
import { render, screen } from '@testing-library/react'

import { CardDashboard } from './CardDashboard'

describe('CardDashboard component', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(
      <CardDashboard
        montante={1000}
        nomeDaMarca="Fiat"
        quantidadeDeVeiculos={9}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
