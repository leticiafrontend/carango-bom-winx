import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { veiculosCadastroStyle } from './styles'
import { useMarcas } from '../../hooks/useMarcas'
import { postVeiculos } from '../../api/veiculos'
import { useVeiculos } from '../../hooks/useVeiculos'

interface PropsMarcas {
  id: number
  nome: string
}

export const VeiculosCadastro = () => {
  const classes = veiculosCadastroStyle()
  const { allMarcas } = useMarcas()

  const [modelo, setModelo] = useState<string>('')
  const [ano, setAno] = useState<string>('')
  const [valor, setValor] = useState<string>('')
  const [marcaId, setMarcaId] = useState<number>(0)
  const history = useHistory()
  const { setAtualizar } = useVeiculos()

  const [erros, setErros] = useState<any>({
    modelo: { valid: true, text: '' },
    ano: { valid: true, text: '' },
    valor: { valid: true, text: '' },
  })

  const cancel = () => {
    history.push('/veiculos')
  }

  const submitForm = (e: any) => {
    e.preventDefault()
    postVeiculos({
      ano,
      id: Math.floor(Math.random() * 1000),
      marcaId: marcaId || 7,
      modelo,
      valor: parseInt(valor, 10),
    })
    history.push('/veiculos')
    setAtualizar(true)
  }

  const valid = (option: string, value: string) => {
    switch (option) {
      case 'modelo':
        if (value.length < 3) {
          return {
            valid: false,
            text: 'O modelo deve conter no mínimo 3 caracteres',
          }
        }
        return { valid: true, text: '' }
      case 'ano':
        if (value.length !== 4) {
          return { valid: false, text: 'O ano deve conter 4 caracteres' }
        }
        return { valid: true, text: '' }
      case 'valor':
        if (value.length < 4) {
          return {
            valid: false,
            text: 'O valor deve conter no minimo 4 caracteres',
          }
        }
        return { valid: true, text: '' }
      default:
        return console.warn('erro de validação')
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classes.root}>
          <FormControl variant="outlined">
            <InputLabel>Marca</InputLabel>
            <Select
              label="Marca"
              value={marcaId}
              onChange={(e: any) => setMarcaId(e.target.value)}
            >
              {allMarcas?.map((marca: PropsMarcas) => (
                <MenuItem value={marca.id}>{marca.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Modelo"
            variant="outlined"
            error={!erros.modelo.valid}
            helperText={erros.modelo.text}
            onChange={(e) => setModelo(e.target.value)}
            onBlur={() => {
              const validModelo = valid('modelo', modelo)
              setErros((prev: any) => ({ ...prev, modelo: validModelo }))
            }}
          />

          <TextField
            label="Ano"
            variant="outlined"
            error={!erros.ano.valid}
            helperText={erros.ano.text}
            onChange={(e) => setAno(e.target.value)}
            onBlur={() => {
              const validAno = valid('ano', ano)
              setErros((prev: any) => ({ ...prev, ano: validAno }))
            }}
          />

          <TextField
            label="Valor"
            variant="outlined"
            error={!erros.valor.valid}
            helperText={erros.valor.text}
            onChange={(e) => setValor(e.target.value)}
            onBlur={() => {
              const validValor = valid('valor', valor)
              setErros((prev: any) => ({ ...prev, valor: validValor }))
            }}
          />
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="primary"
            onClick={(e) => submitForm(e)}
            disabled={
              !erros.modelo.valid ||
              !erros.ano.valid ||
              !erros.valor.valid ||
              modelo.length < 3 ||
              valor.length < 4 ||
              ano.length < 4 ||
              marcaId === 0
            }
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
