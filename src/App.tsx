import React from 'react'
import { Router } from '@reach/router'
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div className="ghl-app">
      <Router>
        <Dashboard path="/" />
        <About path="/about" />
      </Router>
    </div>
  )
}

export default App
