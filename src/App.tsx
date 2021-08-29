import React from 'react';
import './App.css';
import { SpaceLaunchList } from './components/SpaceLaunchList';

function App() {
  return (
    <div className="App m-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <SpaceLaunchList />
      </div>
    </div>
  );
}

export default App;
