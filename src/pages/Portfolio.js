import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Portfolio() {
    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12}>
              
            </Grid>
        </Grid>
    );  
}

export default Portfolio;