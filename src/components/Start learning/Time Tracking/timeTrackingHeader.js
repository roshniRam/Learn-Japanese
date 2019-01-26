import React from 'react';
import TimeTrackingTable from './timeTrackingTable';
class TimeTrackingHeader extends React.Component {
  render() {
		return (
      <header className="headerTimeTracking">
      <h1 className="header__tagline">Time Tracking !</h1>
      <div className="headerTimeTracking__learn" >
      <TimeTrackingTable />
       </div>
      </header>
      );
      }
}
export default TimeTrackingHeader
