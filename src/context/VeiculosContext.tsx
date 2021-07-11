import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'
import { getVeiculos } from '../api/veiculos'

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

  useEffect(() => {
    getVeiculos()
      .then((response) => setVeiculos(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <VeiculosContext.Provider value={{ veiculos, setVeiculos }}>
      {children}
    </VeiculosContext.Provider>
  )
}
