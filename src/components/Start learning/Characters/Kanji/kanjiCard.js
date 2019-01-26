import React from 'react';
import Card from '../../../Card.js';
var head1 = {
  color : '#ed2939',
  fontSize : '20px',
  padding : '20px'
}
var cont1 = {
  padding : '20px'
}
export default class KanjiCard extends React.Component{
  render(){
    return(
      <div className="card">
      <Card
      heading = "Kanji Characters"
      content = "Kanji are the adopted logographic Chinese characters that are used in the Japanese writing system. They are used alongside the Japanese syllabic scripts hiragana and katakana. The Japanese term kanji for the Chinese characters literally means Han characters.Kanji is an ideographic character - each letter symbolizes its meaning. It is used widely to form a sentence."
      />
      
      <div className = "card__content">
      <p style={head1}>Many Kanji letters symbolize the shape of things</p>
      <h4 style={cont1}>Sources </h4>
      <a style={cont1} href="http://japanese-lesson.com/characters/kanji/index.html">Japanese-Lessons </a>
      <a href="https://en.wikipedia.org/wiki/Kanji">Kanji </a>
      </div>
      </div>
    );
  }
}
