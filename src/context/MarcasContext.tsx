import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { useSnackbar } from 'notistack'
import { getMarcas } from '../api/marcas'

interface Marcas {
  id: number
  nome: string
}

interface MarcasContextProp {
  marcas: Marcas[] | undefined
  setMarcas: Dispatch<SetStateAction<[Marcas] | undefined>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

interface MarcasContextProviderProp {
  children: ReactNode
}

export const MarcasContext = createContext({} as MarcasContextProp)

export const MarcasContextProvider = ({
  children,
}: MarcasContextProviderProp) => {
  const [marcas, setMarcas] = useState<[Marcas]>()
  const [page, setPage] = useState(1)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getMarcas(page)
      .then((response) => {
        setMarcas(response.data)
        enqueueSnackbar('Marcas carregadas com sucesso', {
          variant: 'success',
        })
      })
      .catch((err) => {
        enqueueSnackbar('Não foi possivel carregar as marcas', {
          variant: 'error',
        })
        console.log(err)
      })
  }, [page])

  return (
    <MarcasContext.Provider value={{ marcas, setMarcas, page, setPage }}>
      {children}
    </MarcasContext.Provider>
  )
}
