import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

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

  const urlApi =
    'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake/dashboard'

  useEffect(() => {
    fetch(urlApi)
      .then((resp) => resp.json())
      .then((json) => setDash(json))
  }, [])

  return (
    <DashboardContext.Provider value={{ dash, setDash }}>
      {children}
    </DashboardContext.Provider>
  )
}
