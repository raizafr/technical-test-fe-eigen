function reverseAlphabet(str) {
  const letters = str.replace(/\d/g, '');
  const number = str.replace(/\D/g, '');
  const reversedLetters = letters.split('').reverse().join('');
  const result = reversedLetters + number;
  return result;
}

const output = reverseAlphabet('NEGIE1');
console.log(output);
