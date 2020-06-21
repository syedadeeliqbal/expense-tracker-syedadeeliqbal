export default (state, action) => {
    switch(action.type){
        case 'del':
            return {...state,
            transactions: state.transactions.filter(t => t.id !== action.payload)
            };
            case 'add':
                return {
                    ...state, 
                    transactions: [...state.transactions, action.payload]
                }

        default:
            return state;
    }
}