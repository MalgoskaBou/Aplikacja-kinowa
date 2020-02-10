const fs = require('fs');

const settings = {
    movies: 12,
    sessions: 84,
    sessionsPerMovie: 7,
};

function randomSessionListMaker() {
    const sessionList = [];

    let allSessionsIdList = [];
    for (let i = 1; i <= settings.sessions; i++) {
        let id = i < 10 ? 'ss0' + i : 'ss' + i;
        allSessionsIdList.push(id);
    }

    for (let i = 1; i <= settings.movies; i++) {
        let sessionsForSingleMovie = [];
        for (let j = 1; j <= settings.sessionsPerMovie; j++) {
            let randomId = Math.floor(Math.random() * allSessionsIdList.length);
            let key = allSessionsIdList[randomId];
            sessionsForSingleMovie.push(key);
            allSessionsIdList = allSessionsIdList.filter(session => session !== key);
        }
        sessionList.push(sessionsForSingleMovie.sort());
    }
    return sessionList;
}

const sessions = randomSessionListMaker();
const data = JSON.stringify(sessions, null, 2);

fs.writeFile('dbRandomSessions.js', data, 'utf8', err => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Instructions:
// first run in a console: node dbFiller-randomSessionsForMoviesDB.js
// new file will be created in a current directory ("dbRandomSessions.js")
// then copy the content to "db.js" (copy each list item with sessions to each movie from "movies" variable)
