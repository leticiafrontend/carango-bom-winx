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
      '@media (max-width: 420px)': {
        fontSize: '15px',
      },
    },
    buttom: {
      '@media (max-width: 420px)': {
        fontSize: '10px !important',
      },
    },
    filter: {
      paddingRight: '16px',
    },
  }),
)
