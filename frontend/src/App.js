import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// pages and components
import Gigs from './pages/Gigs'

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
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
