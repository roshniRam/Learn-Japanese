import React, { Component } from 'react';
import '../../../sass/main.scss';
import Navbar from '../../Navbar';
import TimeTrackingHeader from './timeTrackingHeader';
export default class TimeTracking extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar />
        <TimeTrackingHeader />
        </div>
      )
   }
}
