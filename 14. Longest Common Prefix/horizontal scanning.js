/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp = strs[0] || "";
    for (var i = 1; i <= strs.length -1; i++) {
        lcp = getlcp(lcp, strs[i])
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
