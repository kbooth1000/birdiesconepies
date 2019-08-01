import React, { Component } from 'react';
import MenuSection from './MenuSection';

import './menu.css';

export default class Menu extends Component {
  componentDidMount() {
    if (!this.props.isCurrentPage('menu')) {
      this.props.setPage('menu');
    }
  }
  componentWillUnmount() {
    this.props.setPage('non');
  }

  info = [
    {
      img: '',
      title: 'Step 1:',
      description: 'Cream',
      items: ['Sweet Cream', 'Cheesecake Cream', 'Tangy Cream'],
      price: ''
    },
    {
      img: '',
      title: 'Step 2:',
      description: 'Flavor',
      items: [
        'Banana',
        'Blackberry',
        'Blueberry',
        'Caramel',
        'Cherry',
        'Chocolate',
        'Macadamia',
        'Cookie Dough',
        'Coconut',
        'Lemon',
        'Lime',
        'Mango',
        'Marshmallow',
        'Mint',
        'Orange',
        'Peach',
        'Peanut Butter',
        'Pineapple',
        'Raspberry',
        'Rootbeer',
        'Strawberry',
        'Vanilla'
      ],
      price: ''
    },
    {
      img: '',
      title: 'Step 3:',
      description: 'Mix-ins',
      items: [
        'Berry Blend',
        'Chocolate Chips',
        'Marshmallows',
        'Oreo Crumbles',
        'Fresh Strawberries',
        'Fresh Lemon'
      ],
      price: '+50¢'
    }
  ];

  render() {
    let infoBoxes = this.info.map(section => (
      <div className="menu-row">
        <MenuSection info={section} />
      </div>
    ));

    return (
      <div
        className={`page menu ${
          this.props.isCurrentPage('menu') ? 'current' : 'not-current'
        }`}
      >
        <h2>Menu</h2>

        {infoBoxes}
      </div>
    );
  }
}
