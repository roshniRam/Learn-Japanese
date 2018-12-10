import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import BasicPhrasesHeader from './basicPhrasesHeader';
export default class BasicPhrases extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <BasicPhrasesHeader />
        </div>
      )
   }
}
