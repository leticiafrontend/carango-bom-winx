import { useContext } from 'react'
import { MarcasContext } from '../context/MarcasContext'

export const useMarcas = () => {
  const value = useContext(MarcasContext)

  return value
}
