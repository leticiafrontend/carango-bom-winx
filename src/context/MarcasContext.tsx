import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { useSnackbar } from 'notistack'
import { getAllMarcas, getMarcas } from '../api/marcas'

interface Marcas {
  id: number
  nome: string
}

interface MarcasContextProp {
  marcas: Marcas[] | undefined
  setMarcas: Dispatch<SetStateAction<[Marcas] | undefined>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  allMarcas: any
  setAtualizar: Dispatch<SetStateAction<any>>
}

interface MarcasContextProviderProp {
  children: ReactNode
}

export const MarcasContext = createContext({} as MarcasContextProp)

export const MarcasContextProvider = ({
  children,
}: MarcasContextProviderProp) => {
  const [marcas, setMarcas] = useState<[Marcas]>()
  const [allMarcas, setAllMarcas] = useState<any>()
  const [page, setPage] = useState(1)
  const [atualizar, setAtualizar] = useState<any>()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getAllMarcas()
      .then((response) => {
        setAllMarcas(response.data)
      })
      .catch(() => {
        enqueueSnackbar('Não foi possivel carregar as marcas', {
          variant: 'error',
        })
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      getMarcas(page).then((response) => {
        setMarcas(response.data)
      })
      setAtualizar(false)
    }, 1000)
  }, [atualizar])

  useEffect(() => {
    getMarcas(page).then((response) => {
      setMarcas(response.data)
    })
  }, [page])

  return (
    <MarcasContext.Provider
      value={{ marcas, setMarcas, page, setPage, allMarcas, setAtualizar }}
    >
      {children}
    </MarcasContext.Provider>
  )
}
