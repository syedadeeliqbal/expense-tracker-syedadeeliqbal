import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Create Provider for the Context
export const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

// Action
function delTran(id){
    dispatch({type: 'del', payload: id});
}

// Action
function addTran(transaction){
    dispatch({type: 'add', payload: transaction});
}

return (<GlobalContext.Provider value={{transactions: state.transactions, delTran, addTran}}>
    {children}
</GlobalContext.Provider>);
}