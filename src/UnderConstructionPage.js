import React from 'react';

import './home.css';
import raspberryPie from './assets/hand-holding-raspberry-pie.png';

export default function UnderConstructionPage() {
  return (
    <div className="main-content home">
      <h2 className="welcome">
        <span>Welcome to </span> <span> Birdie's Cone Pies</span>
      </h2>
      <p className="welcome"><br /><br />Site currently under construction</p>
      <p>Check back soon<br /><br /></p>

     
      <div className="main-pic">
        <h2 aria-hidden="true">
          Hand holding a raspberry cone pie with whipped cream.
        </h2>
      </div>
    </div>
  );
}
