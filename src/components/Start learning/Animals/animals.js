import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import AnimalsHeader from './animalsHeader';
export default class Animals extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <AnimalsHeader />
        </div>
      )
   }
}
