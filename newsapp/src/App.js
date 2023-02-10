
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={
    progress:0
  }
  apikey=process.env.REACT_APP_NewsApiKey
setProgress=(progress)=>{
this.setState({progress:progress})
  }
  render() {
    return (
      <div> 
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => {this.setProgress(0)}}
      />
          <Navbar />
          <Routes>

            <Route exact path="/" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="home" pageSize={20} country={'in'}/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={20} country={'in'} category={"general"} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={20} country={'in'} category={"business"} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={20} country={'in'} category={"entertainment"} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={20} country={'in'} category={"health"} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={20} country={'in'} category={"science"} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={20} country={'in'} category={"sports"} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={20} country={'in'} category={"technology"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}





