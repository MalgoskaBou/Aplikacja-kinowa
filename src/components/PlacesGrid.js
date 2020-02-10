import React from 'react';
import { settings } from '../db';
import Place from './Place';
import './PlacesGrid.css';

class PlacesGrid extends React.Component {
    state = {
        seats: []
    };

    renderSeats = seats => {
        const isReserved = (seat) => {
            return (this.props.session.seatsBooked.some(seatBooked => {
                return seatBooked.row === seat.row && seatBooked.place === seat.place}))
        }
        return seats.map(seat => {
            return (
                <td
                    key={`r${seat.row}p${seat.place}`}>
                        <Place 
                            seat={seat}
                            state={isReserved(seat) ? 'reserved' : 'available'}
                            onPlaceSelect={this.props.onPlaceSelect}
                        />
                </td>
            );
        });
    }

    renderRows = rows => rows.map((row, id) => {
        return (
            <tr key={`r${id}`}>
                {this.renderSeats(row)}
            </tr>
        )
    })

    componentDidMount () {
        const seats = [];
        for (let row = 1; row <= settings.rows; row++) {
            const seatsInARow = [];
            for (let place = 1; place <= settings.places; place++) {
                seatsInARow.push({ row, place });
            }
            seats.push(seatsInARow);
        }
        this.setState({seats});
    }

    render() {
        return (
            <div className="cinema-hall">
                        <table>
                            <tbody>
                                {this.renderRows(this.state.seats)}
                            </tbody>
                        </table>
            </div>
        );
    }
}

export default PlacesGrid;
