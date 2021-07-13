import { createStyles, makeStyles } from '@material-ui/core/styles'

export const veiculosStyle = makeStyles(() =>
  createStyles({
    root: {
      margin: '10px',
      gap: '10px',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '7px',
    },
    title: {
      fontWeight: 500,
    },
  }),
)
