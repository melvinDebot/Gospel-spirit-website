import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Text from './Text/Text';
import SingerBubble from './SingerBubble/SingerBubble'
import TextDescrip from './TextDescrip/TextDescrip';
import Number from './Number/Number';
import TextParagraphe from './TextParagraphe/TextParagraphe';
import Footer from './Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Text />
        <SingerBubble />
        <TextDescrip />
        <Number />
        <TextParagraphe />
        <Footer />
      </div>
    )
  }
}

export default App;
