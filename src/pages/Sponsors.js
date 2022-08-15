import Nav from '../components/Nav';
import Home from '../pages/Home';

import React, { useEffect } from 'react';

function Title() {
  useEffect(() => {
      document.title = 'Sponsors';
  });
}

function Sponsors() {
    Title()
    return (
      <Home />
    );
  }
  
export default Sponsors;
  