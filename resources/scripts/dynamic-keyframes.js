// Dynamically creating keyframes

function generateXCoordinate(direction) {
    let xCoordinate = Math.floor(Math.random()*600);
    if (xCoordinate < 250) {
        generateXCoordinate(direction);
    }
    if (direction === "right") {
        xCoordinate *= 1;
    } else if (direction === "left") {
        xCoordinate *= -1;
    };
    console.log(xCoordinate);
}

function generateYCoordinate(elevation) {
    let YCoordinate = Math.floor(Math.random()*290);
    if (YCoordinate < 255) {
        generateYCoordinate(elevation);
    }
    if (elevation === "up") {
        YCoordinate *= -1;
    } else if (direction === "down") {
        YCoordinate *= 1;
    }
    console.log(YCoordinate);
}

generateYCoordinate("up")

// Good try but not quite it, try again next time