import React, { Component } from 'react';
import { HeadSide } from './components/headside/HeadSide';
import { ContentSide } from './components/contentside/ContentSide';
import gh from "../assets/gh.png";

export default class App extends Component {

  render() {
    return (
      <div>
        <a href="https://github.com/drawcall/AniX">
        <img 
          style={{position: 'absolute', top: 0, right: 0, border: 0}} 
          src={gh} alt="Fork me on GitHub" />
        </a>

        <HeadSide />
        <ContentSide />
      </div>
    );
  }

}
