/*
  Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times player breaks their records for most and least points scored during the season.
*/



function breakingRecords(scores) {
    let minScore = 0, maxScore = 0, minCount = 0, maxCount = 0
    
    minScore = scores[0]
    maxScore = scores[0]
    scores.forEach(score => {
        // console.log(`\n-----------------------------------------------------------------------\nminScore=${minScore}\tminCount=${minCount}\tmaxScore=${maxScore}\tmaxCount=${maxCount}\nChecking ${score}`)
        if(score < minScore) {
            // console.log(`${score} is the new min`)
            minScore = score
            minCount++
        } else if(score > maxScore) {
            // console.log(`${score} is the new MAX`)
            maxScore = score
            maxCount++
        }
    })

    return [maxCount, minCount]
}

// const scoreList = [12 ,24 ,10, 24]
const scoreList = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(breakingRecords(scoreList))