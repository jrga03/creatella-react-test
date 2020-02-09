/**
 * Constants
 */
const MS_IN_A_MINUTE = 1000 * 60;
const MS_IN_AN_HOUR = MS_IN_A_MINUTE * 60;
const MS_IN_A_DAY = MS_IN_AN_HOUR * 24;
const MS_IN_A_WEEK = MS_IN_A_DAY * 7;

/**
 * Converts milliseconds into minutes
 * @param {number} ms - ms
 * @returns {number} Number of minute/s
 */
function msToMinutes( ms = 0 ) {
    return Math.floor( ms / 1000 / 60 );
}

/**
 * Converts milliseconds into hours
 * @param {number} ms - ms
 * @returns {number} Number of hour/s
 */
function msToHours( ms = 0 ) {
    return Math.floor( ms / 1000 / 60 / 60 );
}

/**
 * Converts milliseconds into days
 * @param {number} ms - Milliseconds
 * @returns {number} Number of day/s
 */
function msToDays( ms = 0 ) {
    return Math.floor( ms / 1000 / 60 / 60 / 24 );
}

/**
 * Formats difference in time into human-readable notation
 * @param {number} ms - Millisecond time difference from now
 * @returns {string} Relative human-readable time
 */
function getRelativeTime( ms = 0 ) {
    if ( ms < MS_IN_A_MINUTE ) {
        return 'Just now';
    }

    if ( ms < MS_IN_AN_HOUR ) {
        const minutes = msToMinutes( ms );
        return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`
    }

    if ( ms < MS_IN_A_DAY ) {
        const hours = msToHours( ms );
        return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    }

    const days = msToDays( ms );
    switch ( days ) {
        case 1:
            return 'Yesterday';
        case 7:
            return 'A week ago';
        default:
            return `${days} days ago`;
    }
}

export function formatDate( dateString = Date.now() ) {
    const date = new Date( dateString );
    const dateInMs = date.getTime();
    const timeDiff = Date.now() - dateInMs;

    if ( timeDiff <= MS_IN_A_WEEK ) {
        return getRelativeTime( timeDiff );
    }

    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart( 2, 0 );
    const day = `${date.getDate()}`.padStart( 2, 0 );

    return `${year}-${month}-${day}`;
}
