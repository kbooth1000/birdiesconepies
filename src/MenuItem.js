import React from 'react';

import './menu.css';
import conePieStrawberry from './assets/strawberry-cone-pie.png';

const MenuItem = () => {
    return (
        <div className="menu-item">
            <img className="menu-img" src={conePieStrawberry} alt=""/>
            <div className="menu-item-box">
            <h3>Raspberry Pie</h3>
            <p>Made with fresh Bear Lake raspberries!</p>
            </div>
        </div>
    )
}

export default MenuItem;