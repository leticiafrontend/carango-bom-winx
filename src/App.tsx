import React from 'react'
import GlobalStyle from './styles/global'

import { DashboardContextProvider } from './context/DashboardContext'
import { MarcasContextProvider } from './context/MarcasContext'
import { VeiculosContextProvider } from './context/VeiculosContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <DashboardContextProvider>
      <MarcasContextProvider>
        <VeiculosContextProvider>
          <h1>Hello world!</h1>
        </VeiculosContextProvider>
      </MarcasContextProvider>
    </DashboardContextProvider>
  </>
)
