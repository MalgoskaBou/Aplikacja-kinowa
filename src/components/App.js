import React from "react";
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import moment from "moment";
import {movies, sessions} from "../db";
import Header from "./Header";
import Repertoire from "./Repertoire";
import OrderPanel from "./OrderPanel";
import PageNotFound from "./PageNotFound";
import Modal from "./Modal";

class App extends React.Component {
    state = {
        showModal: false,
        allMovies: [],
        allSessions: [],
        selectedDay: moment(),
        selectedMovie: null,
        selectedSession: null,
        selectedSeats: [],
        goTo: "/",
    };

    onSessionClick = (movie, session, path) => {
        this.setState({
            selectedMovie: movie,
            selectedSession: session,
            goTo: path
        });
    }

    onOrderSubmit = seats => {
        this.setState({
            selectedSeats: seats,
            showModal: !this.state.showModal
        });
    }

    onModalExit = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    onModalReject = () => {
        this.setState({
            showModal: !this.state.showModal,
            selectedSession: null,
            selectedSeats: [],
            goTo: "/"
        });
    }

    onModalConfirm = () => {
        const updatedSessions=this.state.allSessions.map(({...session}) => {
            if (session.id !== this.state.selectedSession.id) return session;
            session.seatsBooked = session.seatsBooked.concat(this.state.selectedSeats);
            return session
        }); 
        this.setState({
            showModal: !this.state.showModal,
            allSessions: updatedSessions,
            selectedSession: null,
            selectedSeats: [],
            goTo: "/",
        });
    }

    onBackButtonClick = () => {
        this.setState({
            selectedSeats: [],
            goTo: "/",
        });
    }

    onPlaceSelect = seat => {
        let newList = this.props.seats;
        if (this.state.selectedSeats.some(reservedSeat => {
            return reservedSeat.row === seat.row && reservedSeat.place === seat.place})) {
                newList = this.state.selectedSeats.filter(reservedSeat => {
                    return !(reservedSeat.row === seat.row && reservedSeat.place === seat.place)});
        } else {
            newList = this.state.selectedSeats.concat(seat);
        }
        this.setState({
            selectedSeats: newList,
        });
    };

    componentDidMount() {
        this.setState({
            allMovies: movies,
            allSessions: sessions,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.goTo !== this.state.goTo || prevState.selectedSession !== this.state.selectedSession) {
            this.props.history.push(this.state.goTo);
        }
    }

    render() {
        return (
                <Switch>
                    <Route exact path="/">
                        <div className="ui container">
                            <Header />
                            <Repertoire  
                                allMovies={this.state.allMovies}
                                allSessions={this.state.allSessions}
                                onSessionClick={this.onSessionClick}
                            />
                        </div>
                    </Route>
                    <Route path="/order">
                        <div className="ui container">
                            <Header />
                            <OrderPanel 
                                movie={this.state.selectedMovie}
                                session={this.state.selectedSession}
                                seats={this.state.selectedSeats}
                                onBackButtonClick={this.onBackButtonClick} 
                                onOrderSubmit={this.onOrderSubmit} 
                                onPlaceSelect={this.onPlaceSelect}
                            />
                            <Modal 
                                show={this.state.showModal}
                                movie={this.state.selectedMovie}
                                session={this.state.selectedSession}
                                seats={this.state.selectedSeats}
                                onExit={this.onModalExit}
                                onReject={this.onModalReject}
                                onConfirm={this.onModalConfirm}
                            />
                        </div>
                    </Route>
                    <Route path="*" >
                        <PageNotFound/>
                    </Route>
                </Switch>
        )
    }
}

export default withRouter(App);
