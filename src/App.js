import Home from "./pages/Home"
import Sponsors from "./pages/Sponsors"
import Team from "./pages/Team"
import Tickets from "./pages/Tickets"
import Error_403 from "./pages/errors/Error_403"
import Error_404 from "./pages/errors/Error_404"
import Error_500 from "./pages/errors/Error_500"

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/403" element={<Error_403 />} />
        <Route path="*" element={<Error_404 />} />
        <Route path="/500" element={<Error_500 />} />
      </Routes>
    </Router>
  );
}

export default App;
