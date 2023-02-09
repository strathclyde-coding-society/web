import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from './sections/Navigation';
import Landing from './sections/Landing';
import About from './sections/About';
import Events from './sections/Events';
import Committee from './sections/Commitee';
import Footer from './sections/Footer';
import Error_403 from "./sections/errors/Error_403"
import Error_404 from "./sections/errors/Error_404"
import Error_500 from "./sections/errors/Error_500"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'SCS - Strathclyde Coding Society';
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route element={
            <div className="w-screen h-screen overflow-x-hidden text-gray-400">
              <Navigation />
              <Landing />
              <About />
              <Events />
              <Committee />
              <Footer />
            </div>
          } path="/"/>
          <Route element={
            <div className="w-screen h-screen overflow-x-hidden text-gray-400">
              <Navigation />
              <Landing />
              <About />
              <Events />
              <Committee />
              <Footer />
            </div>
          } path="/web/"/>
          <Route path="/403" element={<Error_403/>} />
          <Route path="*" element={<Error_404/>}/>
          <Route path="/500" element={<Error_500/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
