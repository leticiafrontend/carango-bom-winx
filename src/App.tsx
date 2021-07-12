import React from 'react'
import GlobalStyle from './styles/global'

import { Routes } from './routes/routes'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
)
