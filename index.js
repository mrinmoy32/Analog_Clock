// let hrs;
// let min;
// let sec;
// let hRotation;
// let mRotation;
// let sRotation;

setInterval(() => {
    time = new Date();
    htime = time.getHours();
    mtime = time.getMinutes();
    stime = time.getSeconds();

    hRotation = 30*htime + mtime/2;
    mRotation = 6*mtime + 0.1*stime;
    sRotation = 6*stime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

},1);