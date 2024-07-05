
function speedChecker(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log('Ok');
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > pointsThreshold) {
            console.log('License suspended');
        }
    }
}

const speed = prompt('Enter car speed (km/h):');
speedChecker(speed);
