import React from 'react';
import PlacesGrid from './PlacesGrid';
import './PlacesSelectionPanel.css';

function PlacesSelectionPanel (props) {
    return (
        <div className="ui container">
            <div className="column">
                    <h3 className="red">Select seats</h3>
                    <div className="ui divider"></div>
                </div>

                <div className="ui four column grid">
                    <div className="row">
                        <div className="column">
                            <i className="square full green icon"></i>
                            Available
                        </div>
                        <div className="column">
                            <i className="square full grey icon"></i>
                            Unavailable
                        </div>
                        <div className="column">
                            <i className="square full orange icon"></i>
                            Your choice
                        </div>
                    </div>
                </div>
            <div className="ui centered grid">
                <div className="row">
                    <div className="center aligned ten wide column">
                        Screen
                    </div>
                </div>
            </div>
            <div>
                <PlacesGrid
                    session={props.session}
                    onPlaceSelect={props.onPlaceSelect}
                />
            </div>
        </div>
    );
}

export default PlacesSelectionPanel;