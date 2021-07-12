import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { marcasCadastroStyle } from './styles'

export const MarcasCadastro = () => {
  const classes = marcasCadastroStyle()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classes.root}>
          <TextField label="Marca" variant="outlined" />
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
