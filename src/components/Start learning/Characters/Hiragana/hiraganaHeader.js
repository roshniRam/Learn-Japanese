import React from 'react';
import HiraganaTable from './hiraganaTable';
import HiraganaCard from './hiraganaCard';
import HiraganaCard1 from './hiraganaCard1';
class HiraganaHeader extends React.Component {
  render() {
		return (
      <header className="headerHiragana">
      <h1 className="headerHiragana__tagline">Hiragana !</h1>
      <div>
      <HiraganaCard />
      <div className="headerHiragana__learn" >
      <HiraganaTable />
       </div>
       </div>
      <HiraganaCard1 />
      </header>
      );
      }
}
export default HiraganaHeader
