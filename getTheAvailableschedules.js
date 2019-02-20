// Given a list of schedules, provide a list of times that are available for a meeting

// Example input:



function getMeFreeTime(times) {
    let finalTimes = []
    let availability =[]
    finalTimes.push([0,0])

    for(let timeArr of times) {
        finalTimes = finalTimes.concat(timeArr) //well concat is transform function
    }

    finalTimes.push([23,23])
    finalTimes.sort(function(a,b) {
        return a[0] - b[0]
    })

    for(let i=1; i< finalTimes.length; i++) {
        let currentTimeSlot = finalTimes[i]
        let prevTimeSlot = finalTimes[i-1]
        if(currentTimeSlot[0] > prevTimeSlot[1]) {
            availability.push([prevTimeSlot[1], currentTimeSlot[0]])
        }

    }

    // console.log(finalTimes)
    return availability
}


console.log(getMeFreeTime([
    [[4,5],[6,10],[12,14]],
    [[4,5],[5,9],[13,16]],
    [[11,14]]
]))

// Example Output:
// [[0,4],[11,12],[16,23]]




