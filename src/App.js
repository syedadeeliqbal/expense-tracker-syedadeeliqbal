import React, { useReducer } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import ExpenseTrackerReducer from './context/ExpenseTrackerReducer';
import { GlobalContext } from './context/GlobalContext';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, makeStyles } from "@material-ui/core";
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#e8f9fd',
    paddingTop: '10px',

  },

}));
let theme = createMuiTheme({
});
theme = responsiveFontSizes(theme);

const initialTrasanctions = {
  transactions: [{ id: 1, text: 'Car', amount: 25000 },],
}

function App() {
  // Action
  function delTran(id) {
    dispatch({ type: 'del', payload: id });
  }

  // Action
  function addTran(transaction) {
    dispatch({ type: 'add', payload: transaction });
  }

  const [state, dispatch] = useReducer(ExpenseTrackerReducer, initialTrasanctions);
  const classes = useStyles();

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, delTran, addTran }}>
      <MuiThemeProvider theme={theme}>
        <Header></Header>
        <Container maxWidth="xs" className={classes.root}>
          <Balance></Balance>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
          <cite>by Syed Adeel Iqbal</cite>
        </Container>
      </MuiThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;