import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Typography,
} from '@material-ui/core'
import { useVeiculos } from '../../hooks/useVeiculos'
import { veiculosStyle } from './styles'

// interface PropsVeiculos {
//   id: number
//   modelo: string
//   ano: number
//   valor: number
//   marca: any
// }

export const Veiculos = () => {
  const veiculos = useVeiculos()
  const classe = veiculosStyle()

  return (
    <>
      <div className={classe.root}>
        <Typography className={classe.title} variant="h5" color="secondary">
          Lista de veículos
        </Typography>
        <Button size="small" variant="contained" color="primary">
          Incluir
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Marca</TableCell>
              <TableCell align="left">Modelo</TableCell>
              <TableCell align="left">Ano</TableCell>
              <TableCell align="left">Valor</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos?.veiculos?.map((veiculo: any) => (
              <TableRow key={veiculo.id}>
                <TableCell component="th" scope="row">
                  {veiculo.marca.nome}
                </TableCell>
                <TableCell align="left">{veiculo.modelo}</TableCell>
                <TableCell align="left">{veiculo.ano}</TableCell>
                <TableCell align="left">
                  {veiculo.valor.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableCell>
                <TableCell align="right">
                  <Button size="small" color="secondary">
                    Excluir
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button size="small" variant="contained" color="primary">
                    Alterar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
