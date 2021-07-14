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
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import FilterListIcon from '@material-ui/icons/FilterList'
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined'
import { useVeiculos } from '../../hooks/useVeiculos'
import { veiculosStyle } from './styles'
import { deleteVeiculo, ordenacaoVeiculo } from '../../api/veiculos'
import { useMarcas } from '../../hooks/useMarcas'

export const Veiculos = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedMarca, setSelectedMarca] = React.useState<any>(0)
  const [selectedOrder, setSelectedOrder] = React.useState<boolean>(false)
  const { veiculos, setVeiculos } = useVeiculos()
  const { allMarcas } = useMarcas()
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

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (id: number) => {
    setAnchorEl(null)
    setSelectedMarca(id)
  }

  const handleOrder = (value: string) => {
    setSelectedOrder(!selectedOrder)
    ordenacaoVeiculo(value, selectedOrder ? 'desc' : 'asc').then((response) =>
      setVeiculos(response.data),
    )
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
              <TableCell>
                Marca
                <IconButton onClick={() => handleOrder('marca')}>
                  <SwapVertOutlinedIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                Modelo
                <IconButton onClick={() => handleOrder('modelo')}>
                  <SwapVertOutlinedIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                Ano
                <IconButton onClick={() => handleOrder('ano')}>
                  <SwapVertOutlinedIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                Valor{' '}
                <IconButton onClick={() => handleOrder('valor')}>
                  <SwapVertOutlinedIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell />
              <TableCell align="right">
                <div className={classe.filter}>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <FilterListIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem value={0} onClick={() => handleClose(0)}>
                      Todos
                    </MenuItem>
                    {allMarcas?.map((marca: any) => (
                      <MenuItem
                        value={marca.id}
                        key={marca.id}
                        onClick={() => handleClose(marca.id)}
                      >
                        {marca.nome}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos
              ?.filter((x: any) => x.marca.id === selectedMarca)
              .map((veiculo: any) => (
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
