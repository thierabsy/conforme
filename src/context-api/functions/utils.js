import formatMoney from 'accounting-js/lib/formatMoney.js';

export const toXOF = montant => {
    return (
        formatMoney(montant, 
            { 
                symbol: "FCFA",  
                format: "%v %s",  
                precision: 2, 
                thousand: ".", 
                decimal: "," 
            }
        )
    )
};