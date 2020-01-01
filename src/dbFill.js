const fs = require('fs');
const moment = require('moment');

const settings = {
    days: 7,
    sessionsPerDay: 5,
    interval: 150, //minutes before next movie starts
    rows: 5,
    places: 10,
};

function timeListMaker() {
    const timeList = [];
    for (let i = 0; i < settings.days; i++) {
        for (let j = 0; j < settings.sessionsPerDay; j++) {
            const time = moment()
                .hour(12)
                .minutes(0)
                .add({ days: i, minutes: j * settings.interval })
                .format('dddd, MMMM Do YYYY, HH:mm');
            timeList.push(time);
        }
    }
    return timeList;
}

function randomSeats() {
    const howManySeats = Math.floor(Math.random() * 8) + 1; // min 1, max 8 seats
    const seats = [];
    for (let i = 0; i < howManySeats; i++) {
        const row = Math.floor(Math.random() * settings.rows) + 1;
        const place = Math.floor(Math.random() * settings.places) + 1;
        seats.push({ row, place });
    }
    return seats;
}

function sessionListMaker() {
    const sessionList = [];
    for (let i = 1; i <= settings.days * settings.sessionsPerDay; i++) {
        const id = i < 10 ? 'ss0' + i : 'ss' + i;

        const sessionObj = {
            _id: id,
            time: times[i - 1],
            seatsBooked: randomSeats(),
        };
        sessionList.push(sessionObj);
    }
    return sessionList;
}

const times = timeListMaker();
const sessions = sessionListMaker();
// console.log(sessions);
// console.log(sessions[1].seatsBooked);

const data = 'const sessions = ' + JSON.stringify(sessions, null, 2);

fs.writeFile('dbSessions.js', data, 'utf8', err => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Instructions:
// first run in a console: node dbFill.js
// new file will be created in a current directory ("dbSessions.js")
// then copy the content from "dbSessions.js" to "db.js"