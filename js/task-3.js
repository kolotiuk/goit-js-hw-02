// Task 3
const findLongestWord = (string) => {
    const str = string.split(" ");
    let longestWord = "";
    let shortWord = "";

    for (let i = 0; i < str.length; i++) {
        if (longestWord < str[i].length) {
            longestWord = str[i].length;
            shortWord = str[i];
        }
    }

    return shortWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
