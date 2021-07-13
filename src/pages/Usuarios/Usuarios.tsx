import React from 'react'
import {
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core'
import { usuariosStyles } from './styles'

export const Usuarios = () => {
  const classe = usuariosStyles()
  return (
    <div>
      <div className={classe.root}>
        <Typography className={classe.title} variant="h5" color="secondary">
          Lista de Usuarios
        </Typography>
        <Button size="small" variant="contained" color="primary">
          Incluir
        </Button>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classe.table} aria-label="customized table">
            <TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ width: 1200 }} component="th" scope="row">
                    Usuário 1
                  </TableCell>
                  <TableCell align="right">
                    <Button color="primary" size="small">
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
