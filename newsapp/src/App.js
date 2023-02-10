
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App=()=> {

  const apikey=process.env.REACT_APP_NewsApiKey
  const pageSize=20

  const [progress, setProgress] = useState(0)

  
    return (
      <div> 
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => {setProgress(0)}}
      />
          <Navbar />
          <Routes>

            <Route exact path="/" element={<News  setProgress={setProgress} apikey={apikey} key="home" pageSize={pageSize} country={'in'}/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={'in'} category={"general"} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country={'in'} category={"business"} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country={'in'} category={"entertainment"} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country={'in'} category={"health"} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country={'in'} category={"science"} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country={'in'} category={"sports"} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country={'in'} category={"technology"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App



