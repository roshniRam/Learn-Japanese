import React, { Component } from 'react';
import '../../../../sass/main.scss';
import Navbar from '../../../Navbar';
import KanjiHeader from './kanjiHeader';
export default class Kanji extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <KanjiHeader />
        </div>
      )
   }
}
