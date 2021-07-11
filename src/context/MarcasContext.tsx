import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

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

  const urlApi =
    'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake/marcas'

  useEffect(() => {
    fetch(urlApi)
      .then((resp) => resp.json())
      .then((json) => setMarcas(json))
  }, [])

  return (
    <MarcasContext.Provider value={{ marcas, setMarcas }}>
      {children}
    </MarcasContext.Provider>
  )
}
