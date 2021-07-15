import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { marcasCadastroStyle } from './styles'
import { postMarcas } from '../../api/marcas'
import { useMarcas } from '../../hooks/useMarcas'

export const MarcasCadastro = () => {
  const classes = marcasCadastroStyle()
  const [nameMarca, setNameMarca] = useState('')
  const [erros, setErros] = useState<any>({ marcas: { valid: true, text: '' } })
  const history = useHistory()
  const { setAtualizar } = useMarcas()

  const cancel = () => {
    history.push('/marcas')
  }

  const submitForm = (e: any) => {
    e.preventDefault()
    postMarcas({
      id: Math.floor(Math.random() * 1000),
      nome: nameMarca,
    })
    history.push('/marcas')
    setAtualizar(true)
    // window.location.reload()
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
        <form className={classes.root}>
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
            onClick={(e) => {
              submitForm(e)
            }}
            disabled={!erros.marcas.valid || nameMarca.length < 3}
          >
            Cadastrar
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => cancel()}
          >
            Cancelar
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
