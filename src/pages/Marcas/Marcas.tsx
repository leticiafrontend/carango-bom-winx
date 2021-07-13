import React from 'react'

import {
  Typography,
  TableCell,
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import { useStyles } from './styles'

import { useMarcas } from '../../hooks/useMarcas'
import { deleteMarca } from '../../api/marcas'

interface PropsMarcas {
  id: number
  nome: string
}

export const Marcas: React.FC = () => {
  const marcas = useMarcas()
  const classes = useStyles()

  const deleteMarcas = (id: number) => {
    let index: number | undefined
    deleteMarca(id).then((response) => {
      console.log(response)

      index = marcas?.marcas?.findIndex((marca) => marca.id === id)
      marcas?.setMarcas(undefined)

      setTimeout(() => {
        const newArray: any = marcas?.marcas
        if (index || index === 0) newArray?.splice(index, 1)
        marcas?.setMarcas(newArray)
      }, 1)
    })
  }

  return (
    <div>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h5" color="secondary">
          Lista de Marcas
        </Typography>
        <Link to="/marcas/cadastro">
          <Button size="small" variant="contained" color="primary">
            Incluir
          </Button>
        </Link>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableBody>
                {marcas?.marcas?.map((marca: PropsMarcas) => (
                  <TableRow>
                    <TableCell
                      style={{ width: 1200 }}
                      component="th"
                      scope="row"
                    >
                      {marca.nome}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        onClick={() => deleteMarcas(marca.id)}
                        size="small"
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
