// const addDigits = (num : number) : number => {
//     let stringified = String(num);
//     if(stringified.length <= 1) return Number(stringified);
//     let s = 0;
//     for(let c of stringified){
//         s += Number(c);
//     }
//     if(s < 10) return s
//     else return addDigits(s)
// }

// const addDigits = (num : number) : number => {
//     let stringified = String(num);
//     if(stringified.length <= 1) return Number(stringified);
//     let sum = 0;
//     for(let c of stringified) sum += Number(c);
//     return addDigits(sum);
// }

// const testCases = [
//   [0, 0],
//   [5, 5],
//   [10, 1],
//   [11, 2],
//   [19, 1],
//   [38, 2],
//   [123, 6],
//   [999, 9],
//   [1001, 2],
//   [9999, 9],
//   [98765, 8],
//   [1000000, 1]
// ];

// for (const [input, expected] of testCases) {
//   const result = addDigits(input);
//   console.log(`addDigits(${input}) = ${result} -> ${result === expected ? 'PASS' : 'FAIL'}`);
// }

// const isAlphabet = (test) => {
//     if(typeof test !== "string" || test.length !== 1) return false;
//     const charCode = test.charCodeAt(0);
//     return (charCode >= 65 && charCode <= 90) ||(charCode >= 97 && charCode <= 122)
// }
// console.log(isAlphabet('a'));

// Parseltongue(add sss after each character): 
// i/p=”Hi how are you”,o/p=”Hsssisss hsssossswsss asssrsssesss ysssosssusss”

// const parselTongue = (sentence : string) : string => {
//     const arr = sentence.split("");
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(arr[i] !== " ") arr.splice(i + 1, 0, ...['s','s','s'])
//     }
//     return arr.join('');
// }
// const testCases = [
//   ["", ""],
//   ["a", "asss"],
//   [" ", " "],
//   ["ab", "asssbsss"],
//   [" a ", " asss "],
//   ["Hi", "Hsssisss"],
//   ["ABC DEF", "AsssBsssCsss DsssEsssFsss"]
// ];

// for (const [input, expected] of testCases) {
//   const result = parselTongue(input);
//   console.log(`parselTongue("${input}") = "${result}" -> ${result === expected ? 'PASS' : 'FAIL'}`);
// }

// const printMiddle = (word : string) => {
//     if(word.length % 2 === 0) {
//         console.log(word[word.length / 2 - 1])
//         console.log(word[word.length / 2])
//     }else {
//         console.log(word[Math.floor(word.length / 2)])
//     }
// }
// printMiddle("abcdefgh")

// Given array of sentences, find maximum number of words in a sentence. Each word in sentence is separated by a single space and sentences don’t have trailing or leading spaces.
// E.g: [“Hello there”, “Hi”, “How are you”] returns 3

// const countWords = (sentence : string) : number => {
//     // let count = 1;
//     // for(let i = 0; i <= sentence.length - 1; i++){
//     //     if(sentence[i] === " ") count++;
//     // }
//     let words = sentence.split(" ");
//     return words.length;
// }

// const countMaxWord = (sentences : string[]) : number => {
//     let max = 0;
//     for(let sentence of sentences){
//         const count = countWords(sentence);
//         if(count > max) max = count
//     }
//     return max;
// }
// console.log(countMaxWord(["Hello there i am", "Hi i am you too", "How are you"]));

// const averageSalary = (salaries : number[]) : number => {
//     let minSalary = salaries[0];
//     let maxSalary = salaries[0];
//     let sum = 0;
//     for(let salary of salaries){
//         sum += salary;
//         if(salary > maxSalary) maxSalary = salary
//         if(salary < minSalary) minSalary = salary
//     }
//     console.log(maxSalary)
//     console.log(minSalary)
//     return (sum - maxSalary - minSalary)/ (salaries.length - 2);
// }
// console.log(averageSalary([4000, 3000, 1000, 2000]))

// Given an array of words, find the longest prefix common across all words. Else, return an empty string
// E.g: 
// [“flower”, “flow”, “fly” ] => “fl”
// [“flower”, “flow”, “abc”] => “”    

// const longestPrefix = (words : string[]) : string => {
//     if(words.length === 0) return ""
//     let longest = ""
//     const smallestWord = words[getSmallestWord(words)]
//     for(let i = 0; i < smallestWord.length; i++){
//         const char = smallestWord[i];
//         for(let j = 0; j < words.length; j++){
//             if(words[j][i] !== char) return longest
//         }
//         longest += char;
//     }
//     return longest;
// }

// const getSmallestWord = (words : string[]) : number => {
//     let smallestWord = 0;
//     for(let i = 1; i <= words.length - 1; i++){
//         if(words[i].length < words[smallestWord].length) smallestWord = i;
//     }
//     return smallestWord;
// }

// console.log(longestPrefix(["flower", "flow", "abc"]))

// Given an array of words, words[i] can be paired with words[j] if:  words[i] is the reverse of words[j]. Return number of possible pairs (Each word can only be in one pair). Else, return -1
// E.g: [“ab”, “cd”, “dc”, “ba”] => 2
// ["ba","dc","cd","ab"]
const possiblePairs = (words : string[]) => {
    const hashMap = new Map();
    for(let word of words){
        hashMap.set(word, (hashMap.get(word) || 0) + 1)
        hashMap.set(word.split('').reverse().join(""), (hashMap.get(word.split('').reverse().join("") || 0)) + 1)
    }
    let count = 0;
    hashMap.forEach((value, key) => {
        if(value === 2) count++;
    } )
    return count;
}
console.log(possiblePairs(["ba","dc","cd","ab"]))
const testCases: [string[], number][] = [
  [["ab", "cd", "dc", "ba"], 2],                // 2 valid pairs: ab-ba, cd-dc
  [["ab", "ba", "ab", "ba"], 2],                // Only two pairs can be made, each word used once
  [["ab", "ba", "cd", "ef"], 1],                // Only ab-ba is valid
  [["ab", "cd", "ef"], -1],                     // No pairs
  [["aa", "bb", "cc", "dd"], -1],               // All non-reversible to each other
  [["xy", "yx", "xz", "zx", "yz", "zy"], 3],    // 3 pairs: xy-yx, xz-zx, yz-zy
  [["ab", "ba", "cd", "dc", "ef", "fe"], 3],    // All have pairs
  [["a", "a", "b", "b"], -1],                   // Palindromes not allowed (a == a), and no reverse pair different from word
  [["abc", "cba", "def", "fed", "ghi"], 2],     // 2 valid pairs
  [[], -1],                                     // Empty input
];
for (const [input, expected] of testCases) {
  const result = possiblePairs(input);
  console.log(`possiblePairs(${JSON.stringify(input)}) = ${result} -> ${result === expected ? 'PASS' : 'FAIL'}`);
}
