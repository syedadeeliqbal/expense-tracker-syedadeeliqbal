import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(t => t.amount);
    const income = amounts.filter(a => a > 0).reduce((acc, cur) => (acc += cur), 0).toFixed(2);
    const expense = Math.abs(amounts.filter(a => a < 0).reduce((acc, cur) => (acc += cur), 0)).toFixed(2);

    return (
        <div>
            <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <CardContent style={{ flex: '1', textAlign: 'center', borderLeft: '5px solid green' }}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Total Income
                    </Typography>
                    <Typography variant="h5" color="textPrimary">${income}
                    </Typography>
                </CardContent>
                <Divider orientation="vertical" flexItem />

                <CardContent style={{ flex: '1', textAlign: 'center', borderRight: '5px solid red' }}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Total Expense
                 </Typography>
                    <Typography variant="h5" color="textPrimary">${expense}</Typography>
                </CardContent>
            </Card>
        </div >
    )
}