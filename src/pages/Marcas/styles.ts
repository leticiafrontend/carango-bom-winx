import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    margin: '10px',
    gap: '10px',
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '7px',
  },
  pagination: {
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'center',
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
  table: {
    minWidth: 100,
  },
})
