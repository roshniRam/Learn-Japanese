import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import FoodHeader from './foodHeader';
export default class Food extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <FoodHeader />
        </div>
      )
   }
}
