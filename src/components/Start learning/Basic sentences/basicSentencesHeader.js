import React from 'react';
import BasicSentencesTable from './basicSentencesTable';
class BasicSentencesHeader extends React.Component {
  render() {
		return (
      <header className="headerBasicSentences">
      <h1 className="header__tagline">Basic Sentences !</h1>
      <div className="headerBasicSentences__learn" >
      <BasicSentencesTable />
       </div>
      </header>
      );
      }
}
export default BasicSentencesHeader
