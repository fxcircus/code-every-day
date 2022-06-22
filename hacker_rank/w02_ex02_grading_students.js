
function gradingStudents(grades) {
    const res = []

    grades.forEach(grade => {
        if(grade < 38) {
            res.push(grade)
        } else {
            const next5 = grade % 5
            let add = 0
            next5 >= 3 ? add = 5 - next5 : null
            res.push(grade + add)
        }
    })

    return res
}

const gradesArr = [4,73,67,38,33]
console.log(gradingStudents(gradesArr)) // [ 4, 75, 67, 40, 33 ]