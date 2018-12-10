import React from 'react';
import BasicPhrasesTable from './basicPhrasesTable';
class BasicPhrasesHeader extends React.Component {
  render() {
		return (
      <header className="headerBasicPhrases">
      <h1 className="header__tagline">Basic Phrases !</h1>
      <div className="headerBasicPhrases__learn" >
      <BasicPhrasesTable />
       </div>
      </header>
      );
      }
}
export default BasicPhrasesHeader
