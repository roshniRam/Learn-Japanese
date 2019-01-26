import React, { Component } from 'react';
import '../../../../sass/main.scss';
import Navbar from '../../../Navbar';
import HiraganaHeader from './hiraganaHeader';
export default class Hiragana extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <HiraganaHeader />
        </div>
      )
   }
}
