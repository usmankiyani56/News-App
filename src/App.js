import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="relevancy" element={<News key="relevancy" pageSize={5} cat="relevancy" />} />
            <Route exact path="popularity" element={<News key="popularity" pageSize={5} cat="popularity" />} />
            <Route exact path="publishedAt" element={<News key="publishedAt" pageSize={5} cat="publishedAt" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
