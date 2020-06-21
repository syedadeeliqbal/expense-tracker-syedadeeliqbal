import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';
import { Typography } from '@material-ui/core';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div style={{ margin: '30px 0' }}>
            <Typography variant="h4">History</Typography>
            {transactions.map(t => (<Transaction key={t.id} transaction={t} />))}
        </div>
    );
}