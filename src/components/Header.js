import React from 'react';
import { Typography,makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#e8f9fd',
      paddingTop: '10px',  
    },  
  }));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h2" align="center" variant="h2"  gutterBottom>Expense Tracker </Typography>
        </div>
    )
}