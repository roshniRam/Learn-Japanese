import React from 'react';
import Card from '../../../Card.js';
export default class KatakanaCard extends React.Component{
  render(){
    return(
      <Card
      heading = "Katakana Characters"
      content = "Katakana is a Japanese syllabary, one component of the Japanese writing system along with hiragana, kanji, and in some cases the Latin script (known as rōmaji). The word katakana means 'fragmentary kana' , as the katakana characters are derived from components or fragments of more complex kanji. Katakana and hiragana are both kana systems. With one or two minor exceptions, each syllable (strictly mora) in the Japanese language is represented by one character, or kana, in each system. Each kana represents either a vowel such as 'a' (katakana ア); a consonant followed by a vowel such as 'ka' (katakana カ); or 'n' (katakana ン), a nasal sonorant which, depending on the context, sounds either like English m, n, or ng, or like the nasal vowels of Portuguese.Katakana and Hiragana represent exactly the same set of sounds. Katakana is used mostly for foreign loan words."
      />
    );
  }
}
