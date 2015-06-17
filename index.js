/**
 * Module Dependencies
 */

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var base = alphabet.length;

/**
 * Export `ntol`
 */

module.exports = ntol;

/**
 * Alpha
 *
 * @param {Number} n
 * @return {String}
 */

function ntol(n) {
    var digits = [];

    do {
      var v = n % base;
      digits.push(v);
      n = Math.floor(n / base);
    } while (n-- > 0);

    var chars = [];
    while (digits.length) {
        chars.push(alphabet[digits.pop()]);
    }

    return chars.join('');
};
