import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import ColorsHeader from './colorsHeader';
export default class Colors extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <ColorsHeader />
        </div>
      )
   }
}
