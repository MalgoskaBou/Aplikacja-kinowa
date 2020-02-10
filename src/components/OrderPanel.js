import React from 'react';
import InfoPanel from './InfoPanel';
import PlacesSelectionPanel from './PlacesSelectionPanel';
import './OrderPanel.css';

function OrderPanel (props) {
    return (
        <div className="ui container">
            <div className="ui text menu">
                <div className="header item">
                    Booking
                </div>
            </div>
            <div className="ui grid">
                <div className="six wide column">
                    <div className="five wide column">
                        <InfoPanel
                            movie={props.movie}
                            session={props.session}
                            seats={props.seats}
                            onOrderSubmit={props.onOrderSubmit}
                            onBackButtonClick={props.onBackButtonClick} 
                        />
                    </div>
                </div>

                <div className="ten wide column">                    
                    <div>
                        <PlacesSelectionPanel
                            session={props.session}
                            onPlaceSelect={props.onPlaceSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderPanel;