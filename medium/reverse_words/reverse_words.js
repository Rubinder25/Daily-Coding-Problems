const reverseWord = word => {
  return word
    .split('')
    .reverse()
    .join('');
};

/**
 * @param {string} s
 * @returns {string}
 */
function reverse_words_js_functions(s) {
  let reverse_words = s
    .trim()
    .split(' ')
    .reverse(' ')
    .join(' ');

  return reverse_words;
}

/**
 * @param {string} s
 * @returns {string}
 */
function reverse_words_single_loop(s) {
  s = s.trim();
  const reverse_words_arr = [];
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      reverse_words_arr.unshift(s.slice(startIndex, i));
      startIndex = i + 1;
    }
  }

  reverse_words_arr.unshift(s.slice(startIndex, s.length + 1));
  return reverse_words_arr.join(' ');
}

module.exports = [reverse_words_single_loop, reverse_words_js_functions];
