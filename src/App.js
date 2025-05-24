import React from 'react';
import NavBar from './components/sindhu/NavBar';



function App() {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
    
        <div style={{ marginLeft: '200px', padding: '1rem' }}>
          <h2>Main Content Area</h2>
          <p>Welcome to the app!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
