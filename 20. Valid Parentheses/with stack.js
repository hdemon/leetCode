/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var array = Array.from(s);
    var stack = [];
    var result = true;
    // var base = array.shift();

    while (array.length > 0) {
        var head = array.shift();
        // console.log("head", head)
        // console.log("stack", stack)
        // console.log("\n")

        if (head === ")" || head === "}" || head === "]") {
            var base = stack.pop();
            if (
                (base === "(" && head === ")") ||
                (base === "[" && head === "]") ||
                (base === "{" && head === "}")
            ) {
                result = true
            } else {
                result = false
                break;
            }
        } else {
            stack.push(head);
        }
    }

    if (stack.length > 0) {
        result = false
    }
    return result;
};


// console.log(isValid("()"))
// console.log(isValid("(()"))
// console.log(isValid(""))
// console.log(isValid("()[]{}"))
// console.log(isValid("({})"))
