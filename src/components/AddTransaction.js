import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [income, setIncome] = useState('Income');

    const {addTran, transactions } = useContext(GlobalContext);

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
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Income/Expense description..."/>                    
                </div>
                <div className="form-control">
                    <label htmlfor="text">
                    <input type="radio" name="radio-group" value="Income" defaultChecked onChange={incomeRadioChanged}/>
                    Income </label>
                    <label htmlfor="text">
                    <input type="radio" name="radio-group" value="Expense"  onChange={incomeRadioChanged}/>
                    Expense</label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(income === 'Income' ? Math.abs(e.target.value): Math.abs(e.target.value) * -1)} placeholder="Enter Amount..."/>                    
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

// checked={isIncome}  onChange={() => setIsIncome(true)}