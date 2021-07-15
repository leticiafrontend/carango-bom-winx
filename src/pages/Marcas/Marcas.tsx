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
  IconButton,
} from '@material-ui/core'
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined'

import { Link } from 'react-router-dom'

import Pagination from '@material-ui/lab/Pagination'
import { useStyles } from './styles'

import { useMarcas } from '../../hooks/useMarcas'
import { deleteMarca, ordenacaoMarca } from '../../api/marcas'

interface PropsMarcas {
  id: number
  nome: string
}

export const Marcas: React.FC = () => {
  const { marcas, setMarcas, allMarcas } = useMarcas()
  const classes = useStyles()

  const { page, setPage } = useMarcas()

  const [selectedOrder, setSelectedOrder] = React.useState<boolean>(false)

  const handleChangePage = (e: any, currentPage: number) => {
    setPage(currentPage)
  }

  const deleteMarcas = (id: number) => {
    let index: number | undefined

    deleteMarca(id).then(() => {
      index = marcas?.findIndex((marca) => marca.id === id)
      setMarcas(undefined)

      setTimeout(() => {
        const newArray: any = marcas
        if (index || index === 0) newArray?.splice(index, 1)
        setMarcas(newArray)
      }, 1)
    })
  }

  const handleOrder = (value: string) => {
    setSelectedOrder(!selectedOrder)
    ordenacaoMarca(value, selectedOrder ? 'desc' : 'asc', page).then(
      (response) => setMarcas(response.data),
    )
  }

  return (
    <div>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h6" color="secondary">
          Lista de Marcas
        </Typography>
        <Link to="/marcas/cadastro">
          <Button
            className={classes.buttom}
            size="small"
            variant="contained"
            color="primary"
          >
            Incluir Marca
          </Button>
        </Link>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Marcas
                  <IconButton onClick={() => handleOrder('valor')}>
                    <SwapVertOutlinedIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {marcas?.map((marca: PropsMarcas) => (
                <TableRow>
                  <TableCell style={{ width: 1200 }} component="th" scope="row">
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
          </Table>
        </TableContainer>
      </div>
      <div className={classes.pagination}>
        <Pagination
          page={page}
          onChange={handleChangePage}
          color="primary"
          count={Math.ceil(allMarcas?.length / 10)}
        />
      </div>
    </div>
  )
}
