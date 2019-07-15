import React from 'react';
import MenuItem from './MenuItem';

import './menu.css';

export default function Menu() {
    return (
        <div className="page menu">
            <h1>Menu</h1>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
            </div>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
            </div>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    )
}
