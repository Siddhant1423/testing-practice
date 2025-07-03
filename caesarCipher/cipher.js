function cipher(str, shift) {
  return str.split('').map(char => shiftChar(char, shift)).join('');
}

function shiftChar(char, shift) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (isUpper || isLower) {
    const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    // Wrap around with modulo 26
    const shifted = ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26;
    return String.fromCharCode(base + shifted);
  }

  // Non-alphabetic characters are unchanged
  return char;
}

module.exports = cipher;