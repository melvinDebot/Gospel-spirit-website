import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Text from './Text/Text';
import SingerBubble from './SingerBubble/SingerBubble'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Text />
        <SingerBubble />
        <div className="tete"></div>
      </div>
    )
  }
}

export default App;
