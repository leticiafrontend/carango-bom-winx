/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { useMarcas } from '../../hooks/useMarcas'
import { deleteMarca } from '../../api/marcas'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell)

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
})

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
      <Typography variant="h5" color="primary">
        Marcas de Veiculos Ã venda
      </Typography>
      {marcas?.marcas?.map((p) => (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell
                      style={{ width: 1200 }}
                      component="th"
                      scope="row"
                    >
                      {p.nome}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        color="primary"
                        onClick={() => deleteMarcas(p.id)}
                        size="small"
                      >
                        Excluir
                      </Button>
                    </StyledTableCell>
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
