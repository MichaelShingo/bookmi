import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// pages and components
import Gigs from './pages/Gigs'
import GigDetails from './pages/GigDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Gigs />}
            />
            <Route 
              path="/gigdetails/:gigId"
              element={<GigDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
