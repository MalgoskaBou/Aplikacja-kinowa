import React from 'react';
import {Link} from "react-router-dom";
import MovieInfo from './MovieInfo';
import Button from './Button';
import './InfoPanel.css';

function InfoPanel(props) {
    return (
        <div className="ui grid">
            <div className="row">
                <MovieInfo
                    title={props.movie.title}
                    image={props.movie.image}
                    summary={props.movie.summary}
                    isVertical={true}
                />
            </div>

            <div className="selected-seats">
                <h4>{props.session.time.format('dddd HH:mm')}</h4>
                <p>{props.seats.length} seats selected.</p>
            </div>

            <div className="row">
                <Link to="/">
                    <Button
                        text={'Back to Repertoire'}
                        active={true}
                        color={'#999'}
                        onButtonClick={props.onBackButtonClick}
                    />
                </Link>
                <Button
                    text={'Submit'}
                    active={props.seats.length ? true : false}
                    onButtonClick={() => props.onOrderSubmit(props.seats)}
                />
            </div>
        </div>
    );
}

export default InfoPanel;
