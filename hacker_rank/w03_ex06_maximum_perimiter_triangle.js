/*
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    sticks.sort(function(a, b) {return a - b})
    console.log(`sorted: ${sticks}`)
    const degenerate = [-1]
    const tris = []
    for(let i = 0; i <= sticks.length -3; i++) {
        const x = sticks[i], y = sticks[i + 1], z = sticks[i + 2]
        if( x + y > z) {
            console.log(`pushing [${x}, ${y}, ${z}]`)
            tris.push([x,y,z])
        }
    }
    if(tris.length === 1) {
        console.log(`only 1 triangle, returning ${tris[0]}`)
        return tris[0]
    } else if(tris.length > 1) {
        console.log(tris)
        let res = []
        let biggest = 0
        tris.forEach(tri=> {
            let sum = 0
            tri.forEach(side => {
                sum += side
            })
            if(sum >= biggest) {
                // console.log('y')
                biggest = sum
                res = tri
            }
        })
        return res
    } else {
        console.log('returning -1')
        return degenerate
    }
    
}

// console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10])) // [3, 4, 5]
console.log(maximumPerimeterTriangle([1, 2, 3])) // -1 (degenerate triangle1)