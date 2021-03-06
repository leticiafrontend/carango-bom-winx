import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

import { cardStyle } from './styles'

interface Dash {
  montante: number
  nomeDaMarca: string
  quantidadeDeVeiculos: number
}

export const CardDashboard = ({
  montante,
  nomeDaMarca,
  quantidadeDeVeiculos,
}: Dash) => {
  const classes = cardStyle()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" color="secondary">
          {nomeDaMarca}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          {montante.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Carros: {quantidadeDeVeiculos}
        </Typography>
      </CardContent>
    </Card>
  )
}
