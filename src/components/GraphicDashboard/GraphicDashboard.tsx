import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'

import { Card, CardContent } from '@material-ui/core'
import { cardStyle } from './styles'

import { useDash } from '../../hooks/useDash'

export const GraphicDashboard = () => {
  const [data, setData] = useState<any>([])
  const dash = useDash()
  const classes = cardStyle()

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value.toLocaleString(
            'pt-br',
            {
              style: 'currency',
              currency: 'BRL',
            },
          )}`}</p>
        </div>
      )
    }
    return null
  }

  useEffect(() => {
    dash?.dash?.map((item) =>
      setData((prev: any) => [
        ...prev,
        { montante: item.montante, name: item.nomeDaMarca },
      ]),
    )
  }, [dash?.dash])

  return (
    <Card className={classes.root}>
      <CardContent>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="montante" barSize={50} fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  )
}
