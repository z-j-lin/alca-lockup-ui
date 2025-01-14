/**
 * Splits a string with an ellipses, leaving designated length on both sides
 * @param {string} str - String to split
 * @param {int} lengthOnSides - How many characters to leave on sides of the ellipses
 */
export function splitStringWithEllipsis(str, lengthOnSides = 3) {
    if (typeof str !== "string") {
        return "";
    }
    return str.slice(0, lengthOnSides)
        + "..."
        + str.slice(str.length - lengthOnSides, str.length);
}

/**
 * Removes the Hex prefix
 * @param { String } address
 * @returns Returns the address
 */
export function removeHexPrefix(address) {
    if (address.indexOf('0x') >= 0) {
        return address.slice(2);
    }
    return address;
}

/**
 * Return true of passed string resembles an expected TxHash
 * @param { String } hash
 * @returns
 */
export function isTxHash(hash) {
    return /^([A-Fa-f0-9]{64})$/.test(hash);
}

/**
 * Take a string with underscores as spaces as prettify it
 * @param input - String to prettify
 * @returns { String }
 */
export function prettyifyUnderscoreKey(input) {
    let keyString = input.split("_");
    let keyWords = keyString.map(word => (upperFirst(word)));
    return keyWords.join(" ");
}

/**
 * Pluralize a string based on a passed boolean parameter
 * @param { String } string - The string to pluralize
 * @param { Boolean } isPluralBool - Supply the boolean condition to determine if the string should have an 's' appended
 */
export function pluralStringCheck(string, isPluralBool) {
    return isPluralBool ? string + "s" : string;
}

/**
 * Capitalize the first character of a string
 * @param { String } str - String to capitalize
 * @returns 
 */
export function upperFirst(str) {
    return (String(str.charAt(0)).toUpperCase() + String(str.slice(1, str.length)));
}