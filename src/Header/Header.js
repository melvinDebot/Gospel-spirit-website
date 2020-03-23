import React from 'react';
import {useAudio} from 'react-use';

import videoOne from '../assets/video/video-one.mp4';
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import music from '../assets/maker.mp3'

const Header = () => {
  const [audio, state, controls, ref] = useAudio({
    src: music,
    autoPlay: false,
    volume: 5
  });
  return(
    <div className="header">
      {audio}
        <div className="header-wrapper">
          <h3>Gospel spirit</h3>
          <svg width="100%" height="100%">
            <mask id="maskLayer">
              <rect width="100%" height="100%" fill="#FFF"></rect>
              <text x="5%" y="50%">La musique </text>
              <text x="5%" y="61%">d'une vie</text>
            </mask>
            <rect id="masked" width="100%" height="100%" fill="black"></rect>
          </svg>
          <video src={videoOne} id="bg" autoPlay loop muted></video>
          <div className="header-bottom">
            <div className="header-bottom--audio">
            <div onClick={controls.pause} className="glyphicon glyphicon-pause"></div>
            <div onClick={controls.play} className="glyphicon glyphicon-play"></div>
            </div>
            <div className="header--bottom-reseaux">
              <img src={instagram} alt="insta"/>
              <img src={facebook} alt="insta"/>
              <img src={twitter} alt="insta"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header;