import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

let redBorder = {
    borderRight: '2px solid red', marginBottom: '5px', backgroundColor: 'white'
  }
  let greenBorder = {
    borderRight: '2px solid green',
    marginBottom: '5px',
    backgroundColor: 'white',  
  }

  const useStyles = makeStyles((theme) => ({
    root: {
    },
    listItems: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    }
  }));
export const Transaction = ({transaction}) => {
    const {delTran} = useContext(GlobalContext);
    const signClass = transaction.amount < 0 ? {sign: '-', cls: 'minus'} : {sign: '+', cls: 'plus'};
    const classes = useStyles();

    return (
      <List className={classes.root}>
        <ListItem divider={true} dense style={signClass.cls === 'minus' ? redBorder : greenBorder} color="textPrimary">
        <ListItemIcon >
          <ListItemText id="switch-list-label-wifi" primary={transaction.text}
            style={{ color: '#000', fontWeight: 'bold' }} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={`${signClass.sign} ${Math.abs(transaction.amount)}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={() => { delTran(transaction.id) }}>
            <DeleteOutlinedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      </List>
    )
}