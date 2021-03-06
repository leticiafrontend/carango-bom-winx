import { createStyles, makeStyles } from '@material-ui/core/styles'

export const cardStyle = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 277.5,
    },
    title: {
      paddingBottom: 20,
      fontWeight: 500,
    },
    subtitle: {
      fontWeight: 400,
    },
  }),
)
