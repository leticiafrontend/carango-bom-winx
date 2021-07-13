import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { marcasCadastroStyle } from './styles'
import { postMarcas } from '../../api/marcas'

export const MarcasCadastro = () => {
  const classes = marcasCadastroStyle()
  const [nameMarca, setNameMarca] = useState('')
  const [erros, setErros] = useState<any>({ marcas: { valid: true, text: '' } })

  const submitForm = (obj: any) => {
    postMarcas({
      id: Math.floor(Math.random() * 1000),
      nome: obj.nameMarca,
    })
  }

  const validMarca = (marca: any) => {
    if (marca.length < 3)
      return setErros({
        marcas: {
          valid: false,
          text: 'A Marca deve conter no mínimo 3 caracteres',
        },
      })

    return setErros({
      marcas: {
        valid: true,
        text: '',
      },
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form
          className={classes.root}
          onSubmit={(e) => {
            e.preventDefault()
            submitForm({ nameMarca })
          }}
        >
          <TextField
            label="Marca"
            variant="outlined"
            error={!erros.marcas.valid}
            helperText={erros.marcas.text}
            onChange={(e) => setNameMarca(e.target.value)}
            onBlur={() => {
              validMarca(nameMarca)
            }}
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            disabled={!erros.marcas.valid}
          >
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
