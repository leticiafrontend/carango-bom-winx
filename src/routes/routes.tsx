import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Veiculos } from '../pages/Veiculos/Veiculos'
import { VeiculosCadastro } from '../pages/VeiculosCadastro/VeiculosCadastro'
import { Marcas } from '../pages/Marcas/Marcas'
import { MarcasCadastro } from '../pages/MarcasCadastro/MarcasCadastro'

interface RotasProps {
  path: string
  exact?: boolean
  component: React.FC
}

const listRoutes: RotasProps[] = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/veiculos',
    exact: true,
    component: Veiculos,
  },
  {
    path: '/marcas',
    exact: true,
    component: Marcas,
  },
  {
    path: '/marcas/cadastro',
    component: MarcasCadastro,
  },
  {
    path: '/veiculos/cadastro',
    component: VeiculosCadastro,
  },
]

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      {listRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
)