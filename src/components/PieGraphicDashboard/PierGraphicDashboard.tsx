import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

import { Card, CardContent, Typography } from '@material-ui/core'
import { cardStyle } from './styles'

import { useDash } from '../../hooks/useDash'

export const PierGraphicDashboard = () => {
  const [data, setData] = useState<any>([])
  const dash = useDash()
  const classes = cardStyle()

  const radian = Math.PI / 180
  const customizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * radian)
    const y = cy + radius * Math.sin(-midAngle * radian)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  useEffect(() => {
    dash?.dash?.map((item) =>
      setData((prev: any) => [
        ...prev,
        {
          quantidadeDeVeiculos: item.quantidadeDeVeiculos,
          name: item.nomeDaMarca,
        },
      ]),
    )
  }, [dash?.dash])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Carros Por Marcas
        </Typography>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={170}
            cy={150}
            labelLine={false}
            label={customizedLabel}
            fill="#8884d8"
            dataKey="quantidadeDeVeiculos"
          />
          <Tooltip />
          {data?.map((item: any) => (
            <Cell key={`cell=${item}`} />
          ))}
        </PieChart>
      </CardContent>
    </Card>
  )
}
