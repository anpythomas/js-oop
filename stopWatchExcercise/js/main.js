class MakeStopwatch {
    constructor () {
        this.tmpDuration = 0, this.fullDuration = 0, this.currentTimeStart, this.isClockRunning = false;
    }

    reset() {
        console.log(`reseting...tmpDuration is ${this.tmpDuration}`);
        this.fullDuration = 0;
        console.log(`reset..tmpDuration now ${this.tmpDuration}`);
    };

    start() {
        if (this.isClockRunning === false) {
            this.currentTimeStart = Date.now();
            this.isClockRunning = true;
            console.log(`starting...tmpDuration is ${this.tmpDuration} current start time is ${this.currentTimeStart}`);
        } else {
            console.log("Clock is already running");
        }
    };

    stop() {
        if (this.isClockRunning === true) {
            this.tmpDuration = (Date.now() - this.currentTimeStart) / 1000;
            console.log(`stopping...tmpDuration is ${this.tmpDuration}`);
            
            this.fullDuration += this.tmpDuration;
            console.log(`stopping... total time on clock running is ${this.fullDuration}`);
            
            this.tmpDuration = 0;
            this.isClockRunning = false;
        } else {
            console.log("Clock is already stopped");
        }
    };
}

const stopwatch = new MakeStopwatch();