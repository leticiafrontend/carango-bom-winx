import { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'

export const useDash = () => {
  const value = useContext(DashboardContext)

  return value
}
