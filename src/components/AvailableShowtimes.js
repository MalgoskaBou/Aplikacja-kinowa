import React from "react";
import Button from "./Button";

function AvailableShowtimes (props) {
    const ifActive = time => {
        return !time.fromNow().includes("ago");
    };

    const renderedList = props.sessions.map(session => {
        return (
                <Button
                    key={session.id}
                    text={session.time.format("HH:mm")}
                    active={ifActive(session.time)}
                    onButtonClick={() => props.onSessionClick(props.movie, session, "/order")}
                />
            );
    });

    return (
        <div className="ui grid">
            {renderedList}
        </div>
    );
}

export default AvailableShowtimes;
