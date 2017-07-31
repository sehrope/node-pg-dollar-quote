var firstTagChars = [
    // Upper case alpha sans vowels
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z',
    // Lower case alpha sans vowels
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
];
var tagChars = firstTagChars.concat([
    // Numeric two through nine
    '2', '3', '4', '5', '6', '7', '8', '9'
]);

/**
 * Dollar quote a given string so that it can be used as a literal in a PostgreSQL SQL command.
 * 
 * If value is undefined or null then the string NULL is returned.
 * 
 * If value is not a string an error is thrown.
 * 
 * Otherwise a suitable dollar quote that does not appear in the 
 * input value will be chosen, defaulting to the shortest possible option
 * $$, and the dollar quoted value will be returned.
 */
module.exports = function dollarQuote(value) {
    if (value === undefined || value === null) {
        return 'NULL';
    }
    if (typeof (value) != 'string') {
        throw new Error('value must be a string');
    }
    var tag = '';
    while (true) {
        var dollarQuote = '$' + tag + '$';
        // Check if val contains our selected dollar quote tag
        if (value.indexOf(dollarQuote) < 0) {
            // Not contained so dollarQuote is safe to use
            return dollarQuote + value + dollarQuote;
        }
        // Tag was contained within val so add random character to it
        if (!tag) {
            // First tag char so make sure to pick the start of an identifier
            tag += firstTagChars[Math.floor(Math.random() * tagChars.length)];
        } else {
            // Not first tag char so can pick a number as well
            tag += tagChars[Math.floor(Math.random() * tagChars.length)];
        }
    }
}
