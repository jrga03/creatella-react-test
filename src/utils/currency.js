/**
 * Formats number
 * @param {number} [number=0]
 * @param {number} [decimal=0]
 * @returns {}
 */
function formatNumber( number = 0, decimal = 0 ) {
    return Number.parseFloat( number ).toFixed( decimal );
}

/**
 * Formats currency into '$XX.XX' notation
 * @param {number} [currency=0]
 * @returns {string} Formatted currency
 */
export function formatCurrency( currency = 0 ) {
    return `$${formatNumber( currency, 2 )}`;
}
