import React from 'react';
import './Place.css';

class Place extends React.Component {
    state = {
        selected: false
    }

    onSwitchSelect = () => {
        this.setState({selected: !this.state.selected});
        this.props.onPlaceSelect(this.props.seat);
    }

    getStyle = () => {
        if (this.props.state==='reserved')  return {background: '#999', cursor: 'default'};
        if (this.props.state==='available' && this.state.selected) return {background: '#EB7D18', cursor: 'pointer'};
        return {background: 'green', cursor: 'pointer'};
    }

    render() {
        return (
            <button 
                className="small ui button" 
                onClick={this.props.state==='available' ? this.onSwitchSelect : null}
                style = {this.getStyle()}
            />
        );
    }
}

export default Place;
