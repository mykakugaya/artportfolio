import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hero from "../components/Hero";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Home() {
    const classes = useStyles();

    return(
    <Grid container className={classes.root}>
        <Grid item xs={12}>
            <Hero />
        </Grid>
    </Grid>
    );  
}

export default Home;