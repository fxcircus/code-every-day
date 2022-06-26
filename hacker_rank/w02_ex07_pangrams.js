/*
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const chars = s.toLowerCase()
    const abc = ['a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z']

    for(let i = 0; i < abc.length; i++) {
        if (!chars.includes(abc[i])) {
            // console.log(`missing ${abc[i]}`)
            return `not pangram`
        }
    }

    return "pangram"
}

console.log(pangrams("The quick brown fox jumps over the lazy dog")) // pangram
console.log(pangrams("We promptly judged antique ivory buckles for the next prize")) // pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")) // not pangram (missing 'x')