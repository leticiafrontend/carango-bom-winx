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
import { Link } from 'react-router-dom'
import { useVeiculos } from '../../hooks/useVeiculos'
import { veiculosStyle } from './styles'
import { deleteVeiculo } from '../../api/veiculos'

export const Veiculos = () => {
  const { veiculos, setVeiculos } = useVeiculos()
  const classe = veiculosStyle()

  const deleteVeiculos = (id: number) => {
    let index: number | undefined
    deleteVeiculo(id).then(() => {
      index = veiculos?.findIndex((veiculo) => veiculo.id === id)
      setVeiculos(undefined)

      setTimeout(() => {
        const newArray: any = veiculos
        if (index || index === 0) newArray?.splice(index, 1)
        setVeiculos(newArray)
      }, 1)
    })
  }

  return (
    <>
      <div className={classe.root}>
        <Typography className={classe.title} variant="h5" color="secondary">
          Lista de Veículos
        </Typography>
        <Link to="/veiculos/cadastro">
          <Button size="small" variant="contained" color="primary">
            Incluir Veículo
          </Button>
        </Link>
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
            {veiculos?.map((veiculo: any) => (
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
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => deleteVeiculos(veiculo.id)}
                  >
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
