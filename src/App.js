import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import RecipeDisplay from './RecipeDisplay';
import Register from './Register';
import HistoryPage from './HistoryPage';
import ReactRegistrationSuccess from './RegistrationSuccess';
import { IngredientProvider } from './context/IngredientContext';
import { TokenProvider } from './context/TokenContext';


function App() {
  return (
    <IngredientProvider>
      <TokenProvider>
        <Router>
          <div className="App">
            <Header />

            <div className="container" >
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/registration-success" element={<ReactRegistrationSuccess />} />
                <Route path="/" element={<RecipeDisplay />} />
                <Route path="/history" element={<HistoryPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      </TokenProvider>
    </IngredientProvider>
  );
}

export default App;

