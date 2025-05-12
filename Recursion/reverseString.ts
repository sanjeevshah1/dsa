const reverseString = (word : string) : string => {
    if(word.length === 0) return ""
    if(word.length === 1) return word;
    let reversed = word[word.length - 1] + reverseString(word.slice(0,word.length - 1))
    return reversed;
}

console.log(reverseString("tenet"))