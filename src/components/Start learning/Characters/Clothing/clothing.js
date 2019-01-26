import React, { Component } from 'react';
import '../../../../sass/main.scss';
import Navbar from '../../../Navbar';
import ClothingHeader from './clothingHeader';
export default class Clothing extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <ClothingHeader />
        </div>
      )
   }
}
