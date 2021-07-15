import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'
import { useSnackbar } from 'notistack'
import { getVeiculos } from '../api/veiculos'

interface Veiculo {
  id: number
  modelo: string
  ano: number
  valor: number
  marcaId: number
  marca: any
}

interface VeiculosContextProps {
  veiculos: Veiculo[] | undefined
  setVeiculos: Dispatch<SetStateAction<[Veiculo] | undefined>>
  setAtualizar: Dispatch<SetStateAction<any>>
}

interface VeiculosContextProviderProps {
  children: ReactNode
}

export const VeiculosContext = createContext({} as VeiculosContextProps)

export const VeiculosContextProvider = ({
  children,
}: VeiculosContextProviderProps) => {
  const [veiculos, setVeiculos] = useState<[Veiculo]>()
  const [atualizar, setAtualizar] = useState<any>()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    setTimeout(() => {
      getVeiculos().then((response) => {
        setVeiculos(response.data)
      })
      setAtualizar(false)
    }, 1000)
  }, [atualizar])

  useEffect(() => {
    getVeiculos()
      .then((response) => {
        setVeiculos(response.data)
      })
      .catch(() => {
        enqueueSnackbar('Não foi possivel carregar os veiculos', {
          variant: 'error',
        })
      })
  }, [])

  return (
    <VeiculosContext.Provider value={{ veiculos, setVeiculos, setAtualizar }}>
      {children}
    </VeiculosContext.Provider>
  )
}
