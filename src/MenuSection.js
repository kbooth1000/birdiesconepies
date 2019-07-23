import React from 'react';

import './menu.css';
import conePieStrawberry from './assets/strawberry-cone-pie.png';

const MenuSection = props => {

    return (
        <div className="menu-item">
            <img className="menu-img" src={props.info.img} alt=""/>
            <div className="menu-item-box">
            <h3>{props.info.title}</h3>
            <p className="desc">{props.info.description}</p>
            <ul>{props.info.items.map(
                (item, i) => <li key={i}>
                    {item}
                </li>               
            )} </ul>
            </div>
        </div>
    )
}
          

export default MenuSection;