import { useContext } from 'react'
import { VeiculosContext } from '../context/VeiculosContext'

export const useVeiculos = () => {
  const value = useContext(VeiculosContext)

  return value
}
