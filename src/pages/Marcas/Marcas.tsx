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

import { useStyles } from './styles'

import { useMarcas } from '../../hooks/useMarcas'
import { deleteMarca } from '../../api/marcas'

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
      <Typography className={classes.title} variant="h5" color="secondary">
        Lista de Marcas
      </Typography>
      {marcas?.marcas?.map((p) => (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{ width: 1200 }}
                      component="th"
                      scope="row"
                    >
                      {p.nome}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        onClick={() => deleteMarcas(p.id)}
                        size="small"
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  )
}
