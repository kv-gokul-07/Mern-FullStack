import React from 'react'
import { Paper, Typography } from '@mui/material'
import useStyles from './styles';


const Post = ({data}) => {
    const classes = useStyles();
  return (
    <Paper className={`${classes.card} ${classes.border}`}>
        <Typography variant="h5">
          Author Name: {data?.creater || "NA"}
        </Typography>
        <Typography variant="h6">
          Book Name: {data?.title || "NA"}
        </Typography>
        <Typography variant="h6">
          Message: {data?.message || "NA"}
        </Typography>
    </Paper>
  )
}

export default Post
