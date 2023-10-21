import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Footer';
import Login from './Login';
import RecipeDisplay from './RecipeDisplay';
import Header from './Header';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />

        <div className="container" >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<RecipeDisplay />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

