class Elevator {
    constructor() {
        this.floor = 0;
        this.MAXFLOOR = 10;
        this.MINFLOOR = -3;
        this.requests = [];
        this.waitingList = [];
        this.passengers = [];
        this.direction = null;
    }

     _start() {
        return setInterval(() => {
            this.update();
        }, 1000);
    }

    stop() {
        clearInterval(this._start());
    }

    update() {
        this.log();
    }

    _passengersEnter() {
        if (waitingList.length > 0) {
            this.reqeusts.push(waitingList[0].destinationFloor);
            console.log(waitingList[0].name + " has enterd the elevator");
            this.passengers.push(waitingList.shift());
        }
    }

    _passengersLeave() {
        for (var i in this.passengers.destinationFloor) {
            if (this.passengers.destinationFloor[i] === this.floor) {
                console.log(this.passengers.destinationFloor[i].name + " has left the elevator");
                this.passengers.destinationFloor.splice(i, 1);
            }
        }
    }

    floorUp() {
        if (this.floor+1 <= this.MAXFLOOR) {
            this.floor++;
        }
        this.destination = "Up";
        return this.floor;
    }

    floorDown() {
        if (this.floor-1 <= this.MAXFLOOR && this.floor-1 >= this.MINFLOOR) {
            this.floor--;
        }
        this.destination = "Down";
        return this.floor;
    }

    call(person) {
        this.waitingList.push(person);
        this.requests.push(person.originFloor);
        this.update();
    }

    log() {
        console.log("Direction: " + this.direction + " | Floor: " + this.floor);
    }
}

module.exports = Elevator;
