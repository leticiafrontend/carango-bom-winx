import { createStyles, makeStyles } from '@material-ui/core/styles'

export const veiculosCadastroStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      margin: '0 auto',
      rowGap: '10px',
    },
  }),
)
