const isPallindrome = (word : string) : Boolean => {
    if(word.length <= 2) return true;
    if(word[0] !== word[word.length - 1]) return false;
    return isPallindrome(word.slice(1, word.length - 1));
}
console.log(isPallindrome('tetet'))