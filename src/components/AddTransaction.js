import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { RadioGroup, Radio, FormControlLabel, Typography, FormControl, TextField, Button } from '@material-ui/core';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [income, setIncome] = useState('Income');

    const { addTran, transactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: transactions.length + 1,
            text,
            amount: +amount,
            income
        }

        addTran(newTransaction);
    }

    const incomeRadioChanged = e => {

        setIncome(e.target.value);
        setAmount(0);
    }

    return (
        <div>
            <Typography variant="h4">Add new Transaction</Typography>
            <form onSubmit={onSubmit}>
                <TextField variant="outlined" name="text" label="Enter Income/Expense description..."
                     fullWidth onChange={(e) => setText(e.target.value)}
                    autoComplete="off" value={text} />
                <FormControl>
                    <RadioGroup row aria-label="incomeexpense" name="incomeexpense" defaultValue='Income' >
                        <FormControlLabel value="Income" defaultChecked control={<GreenRadio />} label="Income" onChange={incomeRadioChanged} />
                        <FormControlLabel value="Expense" control={<Radio />} label="Expense" onChange={incomeRadioChanged} />
                    </RadioGroup>
                    <input type="number" value={amount} onChange={(e) => setAmount(income === 'Income' ? Math.abs(e.target.value) : Math.abs(e.target.value) * -1)} placeholder="Enter Amount..." />
                    <Button type="submit" style={{ margin: '20px 0' }} fullWidth variant="contained"
                    color="primary">Add Transaction</Button>
                </FormControl>
                
            </form>
        </div>
    )
}