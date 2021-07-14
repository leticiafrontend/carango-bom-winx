import React from 'react'

import { Grid } from '@material-ui/core'

import { CardDashboard } from '../../components/CardDashboard/CardDashboard'

import { useDash } from '../../hooks/useDash'
import { GraphicDashboard } from '../../components/GraphicDashboard/GraphicDashboard'
import { PierGraphicDashboard } from '../../components/PieGraphicDashboard/PierGraphicDashboard'

import { dashboard } from './styles'

export const Dashboard: React.FC = () => {
  const { dash } = useDash()
  const classe = dashboard()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid className={classe.root} container spacing={2}>
          <Grid item sm={12} xs={8}>
            <GraphicDashboard />
          </Grid>
          <Grid item sm={12} xs={4}>
            <PierGraphicDashboard />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {dash?.map((card) => (
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
