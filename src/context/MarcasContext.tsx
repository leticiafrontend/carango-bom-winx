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
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getAllMarcas()
      .then((response) => {
        setAllMarcas(response.data)
      })
      .catch((err) => {
        enqueueSnackbar('Não foi possivel carregar as marcas', {
          variant: 'error',
        })
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getMarcas(page).then((response) => {
      setMarcas(response.data)
    })
  }, [page])

  return (
    <MarcasContext.Provider
      value={{ marcas, setMarcas, page, setPage, allMarcas }}
    >
      {children}
    </MarcasContext.Provider>
  )
}
