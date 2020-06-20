import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(t => t.amount);
const total = amounts.length > 0 ? amounts.reduce((acc, cur) => acc += cur) : 0;

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
