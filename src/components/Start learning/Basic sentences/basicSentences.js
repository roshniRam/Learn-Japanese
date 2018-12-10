import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import BasicSentencesHeader from './basicSentencesHeader';
export default class BasicSentences extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <BasicSentencesHeader />
        </div>
      )
   }
}
