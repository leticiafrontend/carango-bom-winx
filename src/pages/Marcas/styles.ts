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
  table: {
    minWidth: 100,
  },
  title: {
    fontWeight: 500,
  },
})
