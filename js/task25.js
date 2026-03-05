function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const test1 = "121";
const test2 = "hello";
const test3 = "racecar";

console.log(`"${test1}" палиндром? ${isPalindrome(test1)}`);
console.log(`"${test2}" палиндром? ${isPalindrome(test2)}`);
console.log(`"${test3}" палиндром? ${isPalindrome(test3)}`);
