import React from "react";
import {Link} from 'react-router-dom';

import raspberryPie from "./assets/hand-holding-raspberry-pie.png";

export default function HomeContent() {
  return (
    <div className="main-content">
    <h2>
      <span>Welcome to </span> <span> Birdie's Cone Pies</span></h2>
      <img
        src={raspberryPie}
        alt="hand holding raspberry cone pie"
        className="left-side-pic"
      />

      <Link to="/find-us" style={{
        height: '10rem',
        width: '10rem',
        background: 'url(assets/SVG/starburst-1.svg)', border: '1px solid #f00', display: 'inline-block', fontSize: '1.3rem'
      }}>
        Find Our Truck!
      </Link>

      <p>
        <span className="birdie-type">Birdie’s Cone Pies</span> are “grandma’s”
        delicious pie crusts in a cone shape ready to eat on the go.
      </p>

      <p>
        Our pies can be filled with our signature cheesecake, sweet or tangy
        cream and your choice of fruits, chocolate, caramel, peanut butter...
        and so much more. Create your own combination.
      </p>
      <p>
        Also look for our fresh fruit and savory pies on our “birds of the week”
        menu. Homemade apple pies, peach cobbler, chicken pot pies... you get
        the idea. Lots to love.
      </p>
      <p>
        <strong>Coming Summer 2019!</strong>
      </p>
      {/* <!-- <div className="main-pic">
        <h2 aria-hidden="true">
          Hand holding a raspberry cone pie with whipped cream.
        </h2>
      </div> --> */}<div style={{clear: 'both', height: '4rem'}}></div>
    </div>
  );
}
