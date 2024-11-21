function wordsStartingWithVowel(str) {
  const vowels = 'aeiouAEIOU';
  const words = str.split(' ');
  const result = [];
  
  for (let word of words) {
    if (vowels.includes(word[0])) {
      result.push(word.toLowerCase());
    }
  }
  
  return result;
}

const inputString = "The journey of life is not defined by the destination, but by the experiences and growth along the way.";
console.log(wordsStartingWithVowel(inputString));
