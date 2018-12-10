import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import NumbersHeader from './numbersHeader';
export default class Numbers extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <NumbersHeader />
        </div>
      )
   }
}
