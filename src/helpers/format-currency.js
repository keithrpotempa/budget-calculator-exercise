const formatCurrency = (amount) => {
    // NOTE: "The last two digits of each number are cents, meaning 60000 is equal to $600.00."
    // So shifting the digits over by two:
    const amountWithCents = amount / 100 

    return new Intl.NumberFormat('en-US',
        { 
            style: 'currency', 
            currency: 'USD', 
            minimumFractionDigits: 2,
        }
    ).format(amountWithCents);
}

export default formatCurrency;