import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import Posts from '../../components/posts/Posts';
import Form from '../../components/Form/Form';
import useStyles from './styles';


const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.posts?.data);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

  return (
    <Container  maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading}  variant="h2" align="center">Books</Typography>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}> 
                    <Grid item xs={12} sm={7}>
                        <Posts data={postsData} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  )
}

export default Home
