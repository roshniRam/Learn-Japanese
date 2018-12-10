import React from 'react';
import Card from '../../../Card.js';
var head1 = {
  color : 'rgb(50,205,50)',
  fontSize : '15px',
  padding : '20px'
}
var cont1 = {
  padding : '20px'
}

export default class KatakanaCard1 extends React.Component{
  render(){
    return(
      <div className="card">
      <Card
      heading = "Origin"
      content = "Katakana was developed in the 8th century by simplifying the form of Kanji symbols. Many Katakana letters look exactly the same as a part of its original Kanji. Some of Hiragana and Katakana letters were made from the same Kanji symbol. Many of Katakana letters look exactly the same as a part of its original Kanji."
      />
      <div className = "card__content">
      <p style={head1}>You can <a href="http://japanese-lesson.com/resources/pdf/characters/katakana_chart.pdf">download/print</a>Katakana chart (PDF) of all Katakana letters.</p>
      <h4 style={cont1}>Sources </h4>
      <a style={cont1} href="http://japanese-lesson.com/characters/katakana/index.html">Japanese-Lessons </a>
      <a href="https://en.wikipedia.org/wiki/Katakana">Katakana</a>
      </div>
      </div>

    );
  }
}
