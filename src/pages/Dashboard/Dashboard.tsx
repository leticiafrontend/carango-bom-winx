import React from 'react'

import { Grid } from '@material-ui/core'

import { CardDashboard } from '../../components/CardDashboard/CardDashboard'

import { useDash } from '../../hooks/useDash'
import { GraphicDashboard } from '../../components/GraphicDashboard/GraphicDashboard'

export const Dashboard: React.FC = () => {
  const dash = useDash()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <GraphicDashboard />
          </Grid>
          <Grid item xs={4}>
            <h1>teste</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {dash?.dash?.map((card) => (
            <Grid key={card.nomeDaMarca} item>
              <CardDashboard
                montante={card.montante}
                nomeDaMarca={card.nomeDaMarca}
                quantidadeDeVeiculos={card.quantidadeDeVeiculos}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
