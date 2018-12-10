import React from 'react';
import KanjiTable from './kanjiTable';
import KanjiTable1 from './kanjiTable1';
import KanjiCard from './kanjiCard';
class KanjiHeader extends React.Component {
  render() {
		return (
      <header className="headerKanji">
      <h1 className="header__tagline">Kanji !</h1>
      <div >
      <KanjiTable />
       </div>
       <KanjiCard />
       <KanjiTable1 />
      </header>
      );
      }
}
export default KanjiHeader
