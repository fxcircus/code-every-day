function processData(input) {
    const inputArr = input.split('\n')
    inputArr.forEach(line => {
        console.log(`line is ${line}`)
        const arr = line.split(';')
        const str = arr[2].split('')
        let res = ''
        console.log(`arr is ${arr}`)
        console.log(`str is ${str}`)

        if(arr[0] === 'S') {
            str.forEach(char => {
                if(char === char.toUpperCase()) {
                    char = char.toLowerCase()
                    res += ' '
                }
                if(char !== '(' && char!== ')') res += char
            })
            if(arr[1] === 'C') res = res.slice(1)
            
        } else if(arr[0] === 'C') {
            for (let idx = 0; idx < str.length; idx++)  {
                if(str[idx] === ' ') {
                    res += str[idx + 1].toUpperCase()
                    idx ++
                } else res += str[idx]
            }
            arr[1] === 'V' ? res = res.charAt(0).toLowerCase() + res.slice(1) : false
            arr[1] === 'C' ? res = res.charAt(0).toUpperCase() + res.slice(1) : false
            if (arr[1] === 'M') {
                res = res.slice(0,-1)
                res += '()'
            }
        } else {
            // console.log('invalid input')
        }

        console.log(res)
    })
} 


// processData('S;M;plasticCup()')
// processData('C;V;mobile phone')
// processData('C;C;coffee machine')
// processData('S;C;LargeSoftwareBook')
// processData('C;M;white sheet of paper')
// processData('S;V;pictureFrame')

keyboardInput = `S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`
processData(keyboardInput)