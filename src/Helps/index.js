
//funcion transforma números a num dinero
function formatMoney(amount) {
    if (amount == null) {
        return '0.00'; // Valor por defecto si amount es null o undefined
    }
    return amount.toLocaleString('de-DE'/* , { minimumFractionDigits: 2, maximumFractionDigits: 2 } */);
}


export {
    formatMoney,
}