import Page from "./sections/Page"
import Error_403 from "./sections/errors/Error_403"
import Error_404 from "./sections/errors/Error_404"
import Error_500 from "./sections/errors/Error_500"

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/403" element={<Error_403 />} />
        <Route path="*" element={<Error_404 />} />
        <Route path="/500" element={<Error_500 />} />
      </Routes>
    </Router>
  );
}

export default App;
