import React from 'react';
import Card from '../../../Card.js';
export default class HiraganaCard extends React.Component{
  render(){
    return(
      <Card
      heading = "Hiragana Characters"
      content = "Hiragana is a Japanese syllabary,one component of the Japanese writing system, along with katakana, kanji, and in some cases rōmaji (Latin script). It is a phonetic lettering system. The word hiragana literally means ordinary or simple kana (simple originally as contrasted with kanji).Hiragana and katakana are both kana systems. With one or two minor exceptions, each sound in the Japanese language is represented by one character (or one digraph) in each system. This may be either a vowel such as a (hiragana あ); a consonant followed by a vowel such as ka (か); or n (ん), a nasal sonorant which, depending on the context, sounds either like English m, n, or ng ([ŋ]), or like the nasal vowels of French. By learning hiragana, you will learn the basics of Japanese pronunciation.Notes Each Hiragana letter represents particular syllable. Letter itself has no meaning. Hiragana is used widely to form a sentence."
      />
    );
  }
}
