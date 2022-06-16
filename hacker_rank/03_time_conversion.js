/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
*/


function timeConversion(s) {
    let hour = parseInt(s.slice(0,2))
    const amOrPm = s.slice(8)
    const rest = s.slice(2,8)
    
    if (amOrPm === 'AM') {
        if (hour >= 12) {
            hour -= 12
        }
    } else if (amOrPm === 'PM') {
        if (hour < 12) {
            hour += 12
        }
    }

    hour < 10 ? hour = `0${hour}` : hour
    return `${hour}${rest}`
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:40:22AM'))
console.log(timeConversion('12:01:00AM'))



/*
let hour = parseInt(s.slice(0,2))
    const amOrPm = s.slice(8)
    const rest = s.slice(2,8)
    if (amOrPm === 'PM') {
        hour+=12
        hour === 24 ? hour = '00' : hour
    }
    hour < 10 ? hour = `0${hour}` : hour
    return `${hour}${rest}`
    */