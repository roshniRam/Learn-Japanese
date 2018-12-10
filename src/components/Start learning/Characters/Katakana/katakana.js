import React, { Component } from 'react';
import '../../../../sass/main.scss';
import Navbar from '../../../Navbar';
import KatakanaHeader from './katakanaHeader';
export default class Katakana extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <KatakanaHeader />
        </div>
      )
   }
}
