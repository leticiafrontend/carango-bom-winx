import { createStyles, makeStyles } from '@material-ui/core/styles'

export const cardStyle = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    title: {
      paddingBottom: 20,
      fontWeight: 500,
    },
  }),
)
