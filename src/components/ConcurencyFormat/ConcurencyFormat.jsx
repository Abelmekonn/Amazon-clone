import React from 'react';

const CurrencyFormat = ({ amount }) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);

    return <span>{formattedAmount}</span>;
};

export default CurrencyFormat;
