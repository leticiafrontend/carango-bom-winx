import React from 'react'
import GlobalStyle from './styles/global'

import { DashboardContextProvider } from './context/DashboardContext'
import { MarcasContextProvider } from './context/MarcasContext'
import { VeiculosContextProvider } from './context/VeiculosContext'
import { Menu } from './components/Menu/Menu'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <DashboardContextProvider>
      <MarcasContextProvider>
        <VeiculosContextProvider>
          <Menu />
        </VeiculosContextProvider>
      </MarcasContextProvider>
    </DashboardContextProvider>
  </>
)
