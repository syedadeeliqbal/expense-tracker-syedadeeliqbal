import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({transaction}) => {
    const {delTran} = useContext(GlobalContext);

    const signClass = transaction.amount < 0 ? {sign: '-', cls: 'minus'} : {sign: '+', cls: 'plus'};
    return (
        <li className={signClass.cls}>
                    {transaction.text} <span>{signClass.sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick = {() => delTran(transaction.id)}>x</button>
                </li>
    )
}