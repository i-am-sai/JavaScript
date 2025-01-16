setTimeout(() => console.log("Started..."), 2000);

const IntervalID = setInterval(() => console.log("AFter every 2 sec"), 2000);
setTimeout(() => {
    clearInterval(IntervalID);
    console.log("Interval stopped")
}, 6000);
