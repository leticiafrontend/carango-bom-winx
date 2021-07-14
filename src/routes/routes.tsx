import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Veiculos } from '../pages/Veiculos/Veiculos'
import { VeiculosCadastro } from '../pages/VeiculosCadastro/VeiculosCadastro'
import { Marcas } from '../pages/Marcas/Marcas'
import { MarcasCadastro } from '../pages/MarcasCadastro/MarcasCadastro'
import { Menu } from '../components/Menu/Menu'
import { DashboardContextProvider } from '../context/DashboardContext'
import { VeiculosContextProvider } from '../context/VeiculosContext'
import { MarcasContextProvider } from '../context/MarcasContext'
import { Login } from '../pages/Login/Login'
import { Usuarios } from '../pages/Usuarios/Usuarios'

interface RotasProps {
  path: string
  exact?: boolean
  component: React.FC
}

const listRoutes: RotasProps[] = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/dashboard',
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
  {
    path: '/entrar',
    exact: true,
    component: Login,
  },
  {
    path: '/usuarios',
    exact: true,
    component: Usuarios,
  },
]

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <SnackbarProvider>
        <DashboardContextProvider>
          <VeiculosContextProvider>
            <MarcasContextProvider>
              <Menu>
                {listRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Menu>
            </MarcasContextProvider>
          </VeiculosContextProvider>
        </DashboardContextProvider>
      </SnackbarProvider>
    </Switch>
  </BrowserRouter>
)
