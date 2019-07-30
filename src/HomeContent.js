import React from 'react';
import { NavLink } from 'react-router-dom';

import './home.css';
import raspberryPie from './assets/hand-holding-raspberry-pie.png';

export default function HomeContent() {
  return (
    <div className="main-content home">
      <h2 className="welcome">
        <span>Welcome to </span> <span> Birdie's Cone Pies</span>
      </h2>
      <img
        src={raspberryPie}
        alt="hand holding raspberry cone pie"
        className="left-side-pic"
      />

      <NavLink to="/find-us" className="star-link two">
        <span>Find Our Truck!</span>
      </NavLink>

      <p>
            <span className="birdie-type">Birdie’s Cone Pies</span> are
            “grandma’s” delicious pie crusts in a cone shape ready to eat on the
            go.
          </p>

          <p>
            Our pies can be filled with our signature cheesecake, sweet or tangy
            cream and your choice of fruits, chocolate, caramel, peanut
            butter... and so much more. Create your own combination.
          </p>
          <p>
            Also look for our fresh fruit pies on our "Bird of the Day" menu.
            Homemade apple pie, mixed berry "Dodo" pie, peach cobblers, ... you
            get the idea.
          </p>
          <p>
            And for "Little Larks," come build-a-nest with your favorite
            flavored cream, delicious mix-ins, sprinkled pie crust, and topped
            with a "birdie." Lots to love.
          </p>
      <div style={{ clear: 'both', height: '4rem' }} />
      <div className="main-pic">
        <h2 aria-hidden="true">
          Hand holding a raspberry cone pie with whipped cream.
        </h2>
      </div>
    </div>
  );
}
