import { AD_FREQUENCY } from '../constants';

/**
 * Get index of next ad
 * @param {number} adCount - Current number of ads in list
 * @returns {number} Index of next ad
 */
function getIndexOfNextAd( adCount ) {
    return ( AD_FREQUENCY * ( adCount + 1 ) ) + adCount;
}

/**
 * Generate a random number less than the given limit
 * @param {number} [limit=1] - Upper limit. This will not be included in the result.
 * @returns {number}
 */
function getRandomNumber( limit = 1) {
    return Math.floor( Math.random() * limit );
}

/**
 * Get ID of next ad
 * @param {number} prevId - ID of the previous ad
 * @returns {number} ID of next ad
 */
function getIdOfNextAd( prevId ) {
    let newAdId = getRandomNumber( 1000 );

    // Generate new ID if prev and new ID are the same
    if ( newAdId === prevId ) {
        newAdId = getIdOfNextAd( prevId );
    }

    return newAdId;
}

/**
 * Inserts ads to product list
 * @param {object[]} products - Product list
 * @param {object} ad
 * @param {number} ad.count - Current count of ads added
 * @param {number} ad.prev - ID of the previous ad
 * @returns {object[]}
 */
export function insertAdsToProducts( products, ad ) {
    let adCount = ad.count;
    let prevAdId = ad.prev;

    // IIFE to insert ads
    (function insertAd( productList, adObj ) {
        const indexOfNextAd = getIndexOfNextAd( adObj.count );

        if ( indexOfNextAd < productList.length ) {
            const idOfNextAd = getIdOfNextAd( adObj.prev );
            productList.splice( indexOfNextAd, 0, idOfNextAd );

            adCount = adObj.count + 1;
            prevAdId = idOfNextAd;

            // Recursively insert ads if needed
            insertAd(
                productList,
                {
                    count: adCount,
                    prev: idOfNextAd
                }
            );
        }
    })( products, ad );

    return {
        productsWithAds: products,
        adCount,
        prevAdId
    };
}
