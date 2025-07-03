const reverseStr = (str) => {
    if (!str) return "";
    return str.split("").reverse().join("");
}

module.exports = reverseStr;