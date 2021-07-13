import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core'
import { useVeiculos } from '../../hooks/useVeiculos'

interface PropsVeiculos {
  id: number
  modelo: string
  ano: number
  valor: number
  marcaId: number
}

export const Veiculos = () => {
  const veiculos = useVeiculos()

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell align="left">Modelo</TableCell>
            <TableCell align="left">Ano</TableCell>
            <TableCell align="left">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {veiculos?.veiculos?.map((veiculo: PropsVeiculos) => (
            <TableRow key={veiculo.id}>
              <TableCell component="th" scope="row">
                {veiculo.marcaId}
              </TableCell>
              <TableCell align="left">{veiculo.modelo}</TableCell>
              <TableCell align="left">{veiculo.ano}</TableCell>
              <TableCell align="left">
                {veiculo.valor.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
