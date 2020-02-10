import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="content-header content sixteen wide column">
                    <div className="cinema-header ui sub header"> Cinema </div>
                    <div className="app-header"> App </div>
                </div>
            </div>
        </div>
    );
}

export default Header;