import React from 'react'
import GlobalStyle from './styles/global'

import { DashboardContextProvider } from './context/DashboardContext'

import { MarcasContextProvider } from './context/MarcasContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <DashboardContextProvider>
      <MarcasContextProvider>
        <h1>Hello world!</h1>
      </MarcasContextProvider>
    </DashboardContextProvider>
  </>
)
