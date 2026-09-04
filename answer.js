// question no.1
function describeValue(value) {
    let typeName = typeof value;
    let booleanResult = "falsy";
    
    if (value) {
        booleanResult = "truthy";
    }
    
    return typeName + " | " + booleanResult;
}


// question no.2

function getDayType(dayName) {
    let lowerDay = dayName.toLowerCase();
    
    switch (lowerDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// question no.3

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    
    let lowerUsername = username.toLowerCase();
    if (lowerUsername.includes("admin")) {
        return "Reserved Word";
    }
    
    return "Available";
}


// question no.4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;
    
    if (distance > 2) {
        let extraDistance = distance - 2;
        fare = fare + (extraDistance * 15);
    }
    
    let waitingCharge = waitingMinutes * 2;
    fare = fare + waitingCharge;
    
    if (isNight) {
        fare = fare + (fare * 0.20);
    }
    
    return fare;
}


// question no.5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    
    if (runsNeeded <= 0) {
        return "Won";
    }
    
    if (ballsLeft <= 0) {
        return "Lost";
    }
    
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
