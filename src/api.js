import axios from 'axios';

/**
 * Set axios defaults
 */
axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common[ 'X-Requested-With' ] = 'XMLHttpRequest';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json';

/**
 * Fetches product list
 * @param {object} params
 * @param {number} params.page - Page number
 * @param {number} [params.limit=15] - Limit of the number of items to be returned
 * @param {string} [params.sort=''] - Sort results by one of ['price', 'size', 'id']
 * @returns {object[]} List of products
 */
export async function getProducts({ page, limit = 15, sort = '' } = {}) {
    const params = {
        _page: page,
        _limit: limit
    };

    if ( sort ) {
        params._sort = sort;
    }

    const { data } = await axios({
        url: '/api/products',
        method: 'GET',
        params
    });

    return data;
}
