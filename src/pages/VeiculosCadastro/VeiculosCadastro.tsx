import React from 'react'
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { veiculosCadastroStyle } from './styles'
import { useMarcas } from '../../hooks/useMarcas'

interface PropsMarcas {
  id: number
  nome: string
}

export const VeiculosCadastro = () => {
  const classes = veiculosCadastroStyle()
  const marcas = useMarcas()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classes.root}>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Marca
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Marca"
            >
              {marcas?.marcas?.map((marca: PropsMarcas) => (
                <MenuItem value={marca.id}>{marca.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Modelo" variant="outlined" />
          <TextField label="Ano" variant="outlined" />
          <TextField label="Valor" variant="outlined" />
          <Button size="large" variant="contained" color="primary">
            Cadastrar
          </Button>
          <Button size="large" variant="contained" color="secondary">
            Cancelar
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
