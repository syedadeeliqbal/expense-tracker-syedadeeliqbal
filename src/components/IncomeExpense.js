import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
    const {transactions}  = useContext(GlobalContext);
    const amounts = transactions.map(t => t.amount);
    //const income = amounts.filter(a => a.amounts > 0).reduce((acc, cur) => Math.abs( acc += cur), 0).toFixed(2);
    const income = amounts.filter(a => a > 0).reduce((acc, cur) => ( acc += cur), 0).toFixed(2);
    const expense = Math.abs(amounts.filter(a => a < 0).reduce((acc, cur) => ( acc += cur), 0)).toFixed(2);
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    )
}