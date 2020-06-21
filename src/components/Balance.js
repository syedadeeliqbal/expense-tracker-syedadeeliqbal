import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Card, CardContent, Typography } from '@material-ui/core';

let borderRed = '5px solid red';
let borderGreen = '5px solid green';

export const Balance = () => {
const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(t => t.amount);
const total = amounts.length > 0 ? amounts.reduce((acc, cur) => acc += cur) : 0;

    return (
        <div>
            <Card style={{ margin: '15px 0', textAlign: 'center' }}>
                <CardContent style={{ borderRight: (total > 0 ? borderGreen : borderRed), borderLeft: (total > 0 ? borderGreen : borderRed)   }}>
                    <Typography variant="h6" color="textSecondary">Your Balance</Typography>
                    <Typography variant="h4" color="textPrimary">
                        $ {total}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
