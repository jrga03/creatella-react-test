/**
 * Gets current document's height
 * @returns {number} Document height
 */
function getDocumentHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
}

/**
 * Checks if scroll position is at the bottom of the page
 * @returns {boolean} Bottom of page flag
 */
export function isBottomOfPage() {
    const docHeight = getDocumentHeight();
    return window.innerHeight + document.documentElement.scrollTop === docHeight;
}
