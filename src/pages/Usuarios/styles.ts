import { makeStyles } from '@material-ui/core/styles'

export const usuariosStyles = makeStyles({
  root: {
    margin: '10px',
    gap: '10px',
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '7px',
  },
  table: {
    minWidth: 100,
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
})
