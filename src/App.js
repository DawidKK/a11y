import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from "react";
import { Context } from "./context.js";
import List from './components/List'
import CarDetails from './components/CarDetails'
import './App.sass';


function App() {
  const [context, setContext] = useState(false)
  return (
    <Context.Provider value={[context, setContext]}>
      <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/car-details" element={<CarDetails />} />
          </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
