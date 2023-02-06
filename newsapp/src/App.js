
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={20}/>
      </div>
    )
  }
}

// 9856e4b407c245f294e49ed3ace91c5b API KEY



