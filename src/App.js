import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import List from './components/List'
import CarDetails from './components/CarDetails'
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/car-details" element={<CarDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
