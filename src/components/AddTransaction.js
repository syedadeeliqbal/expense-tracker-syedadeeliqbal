import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTran, transactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: transactions.length + 1,
            text,
            amount: +amount
        }

        addTran(newTransaction);
    }

    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>                    
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>
                    (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Amount..."/>                    
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}