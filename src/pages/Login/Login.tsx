import React, { useState } from 'react'
import { TextField, Grid, Typography, Switch, Button } from '@material-ui/core'
import { loginStyle } from './styles'

export const Login: React.FC = () => {
  const [modo, setModo] = useState<boolean>(false)
  const classe = loginStyle()

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
          <TextField label="Nome" variant="outlined" />
          <TextField label="Senha" variant="outlined" />
          {!modo && <Typography component="small">Esqueci a senha</Typography>}
          <Button size="large" variant="contained" color="primary">
            {modo ? 'Cadastrar' : 'entrar'}
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
