/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";

    let lcp = strs[0];

    const median = Math.floor(strs.length / 2);
    if (strs.length === 1) {
        lcp = strs[0];
    } else {
        const lcpLeft = longestCommonPrefix(strs.slice(0, median));
        const lcpRight = longestCommonPrefix(strs.slice(median, strs.length));
        return getlcp(lcpLeft, lcpRight);
    }
    return lcp;
};

const getlcp = function(base, head) {
    let matchedLength = 0;
    for (var i = 0; i < base.length; i++) {
        if (head[i] !== undefined && base[i] === head[i]) {
            matchedLength = i + 1;
        } else {
            break;
        }
    }
    if (matchedLength > 0) {
        return base.slice(0, matchedLength);
    } else {
        return "";
    }
}

console.log(longestCommonPrefix(['dog', 'doo', 'doa']))
