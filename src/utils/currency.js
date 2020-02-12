/**
 * Formats number
 * @param {number} [number=0]
 * @param {number} [decimal=0]
 * @returns {string}
 */
function formatNumber( number = 0, decimal = 0 ) {
    return Number.parseFloat( number / 100 ).toFixed( decimal );
}

/**
 * Formats price into '$XX.XX' notation
 * @param {number} [price=0] - Price in cents
 * @returns {string} Formatted price
 */
export function formatPrice( price = 0 ) {
    return `$${formatNumber( price, 2 )}`;
}
