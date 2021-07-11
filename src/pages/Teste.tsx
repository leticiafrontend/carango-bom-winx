import React from 'react'
import { useDash } from '../hooks/useDash'
import { useMarcas } from '../hooks/useMarcas'
import { useVeiculos } from '../hooks/useVeiculos'

export const Teste = () => {
  const dash = useDash()
  const marcas = useMarcas()
  const veiculos = useVeiculos()
  console.log(marcas)
  console.log(veiculos)
  console.log(dash)
  return (
    <div>
      <h1>Teste</h1>
    </div>
  )
}
