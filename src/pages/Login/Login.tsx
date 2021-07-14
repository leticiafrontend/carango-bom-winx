import React, { useState } from 'react'
import { TextField, Grid, Typography, Switch, Button } from '@material-ui/core'
import { loginStyle } from './styles'

export const Login: React.FC = () => {
  const classe = loginStyle()
  const [modo, setModo] = useState<boolean>(false)

  const [nome, setNome] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const [erros, setErros] = useState<any>({
    nome: { valid: true, text: '' },
    senha: { valid: true, text: '' },
  })

  const submitForm = (e: any) => {
    e.preventDefault()
  }

  const valid = (option: string, value: string) => {
    switch (option) {
      case 'nome':
        if (value.length < 3) {
          return {
            valid: false,
            text: 'O nome deve conter no mínimo 3 caracteres',
          }
        }
        return { valid: true, text: '' }
      case 'senha':
        if (value.length < 6) {
          return {
            valid: false,
            text: 'A senha deve conter no mínimo 6 caracteres',
          }
        }
        return { valid: true, text: '' }
      default:
        return console.warn('Erro de validação')
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classe.root}>
          <Typography component="div" className={classe.switch}>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Login</Grid>
              <Grid item>
                <Switch
                  checked={modo}
                  name="switch"
                  onChange={() => setModo(!modo)}
                />
              </Grid>
              <Grid item>Cadastro</Grid>
            </Grid>
          </Typography>
          <TextField
            label="Nome"
            variant="outlined"
            error={!erros.nome.valid}
            helperText={erros.nome.text}
            onChange={(e) => setNome(e.target.value)}
            onBlur={() => {
              const validNome = valid('nome', nome)
              setErros((prev: any) => ({ ...prev, nome: validNome }))
            }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            error={!erros.senha.valid}
            helperText={erros.senha.text}
            onChange={(e) => setSenha(e.target.value)}
            onBlur={() => {
              const validSenha = valid('senha', senha)
              setErros((prev: any) => ({ ...prev, senha: validSenha }))
            }}
          />
          {!modo && <Typography component="small">Esqueci a senha</Typography>}
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="primary"
            disabled={
              nome.length < 3 ||
              senha.length < 6 ||
              !erros.nome.valid ||
              !erros.senha.valid
            }
            onClick={(e) => submitForm(e)}
          >
            {modo ? 'Cadastrar' : 'entrar'}
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
