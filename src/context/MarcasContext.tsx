import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { getMarcas } from '../api/marcas'

interface Marcas {
  id: number
  nome: string
}

interface MarcasContextProp {
  marcas: Marcas[] | undefined
  setMarcas: Dispatch<SetStateAction<[Marcas] | undefined>>
}

interface MarcasContextProviderProp {
  children: ReactNode
}

export const MarcasContext = createContext({} as MarcasContextProp | undefined)

export const MarcasContextProvider = ({
  children,
}: MarcasContextProviderProp) => {
  const [marcas, setMarcas] = useState<[Marcas]>()

  useEffect(() => {
    getMarcas()
      .then((response) => setMarcas(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <MarcasContext.Provider value={{ marcas, setMarcas }}>
      {children}
    </MarcasContext.Provider>
  )
}
