import React from 'react'
import GlobalStyle from './styles/global'

import { DashboardContextProvider } from './context/DashboardContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <DashboardContextProvider>
      <h1>Hello world!</h1>
    </DashboardContextProvider>
  </>
)
