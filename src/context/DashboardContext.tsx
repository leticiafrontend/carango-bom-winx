import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useSnackbar } from 'notistack'
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

export const DashboardContext = createContext({} as DashContext)

export const DashboardContextProvider = ({ children }: DashContextProvider) => {
  const [dash, setDash] = useState<[Dash]>()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getDashboard()
      .then((response) => {
        setDash(response.data)
      })
      .catch(() => {
        enqueueSnackbar('Não foi possivel carregar a Dashboard', {
          variant: 'error',
        })
      })
  }, [])

  return (
    <DashboardContext.Provider value={{ dash, setDash }}>
      {children}
    </DashboardContext.Provider>
  )
}
