import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { getDashboard } from '../api/dashboard'

interface Dash {
  montante: number
  nomeDaMarca: string
  quantidadeDeVeiculos: number
}

interface DashContext {
  dash: Dash[] | undefined
  setDash: Dispatch<SetStateAction<[Dash] | undefined>>
}

interface DashContextProvider {
  children: ReactNode
}

export const DashboardContext = createContext({} as DashContext | undefined)

export const DashboardContextProvider = ({ children }: DashContextProvider) => {
  const [dash, setDash] = useState<[Dash]>()

  useEffect(() => {
    getDashboard()
      .then((response) => setDash(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <DashboardContext.Provider value={{ dash, setDash }}>
      {children}
    </DashboardContext.Provider>
  )
}
