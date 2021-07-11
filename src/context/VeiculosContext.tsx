import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

interface Veiculo {
  id: number
  modelo: string
  ano: number
  valor: number
  marcaId: number
}

interface VeiculosContextProps {
  veiculos: Veiculo[] | undefined
  setVeiculos: Dispatch<SetStateAction<[Veiculo] | undefined>>
}

interface VeiculosContextProviderProps {
  children: ReactNode
}

export const VeiculosContext = createContext(
  {} as VeiculosContextProps | undefined,
)

export const VeiculosContextProvider = ({
  children,
}: VeiculosContextProviderProps) => {
  const [veiculos, setVeiculos] = useState<[Veiculo]>()

  const urlApi =
    'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake/veiculos'

  useEffect(() => {
    fetch(urlApi)
      .then((resp) => resp.json())
      .then((json) => setVeiculos(json))
  }, [])

  return (
    <VeiculosContext.Provider value={{ veiculos, setVeiculos }}>
      {children}
    </VeiculosContext.Provider>
  )
}
