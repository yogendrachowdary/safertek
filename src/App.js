import React, { useState } from 'react';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import StatisticsBlock from './components/StatisticsBlock';

function App() {
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div>
      <Header />
      <MainBlock showStatistics={showStatistics} setShowStatistics={setShowStatistics} />
      {showStatistics && <StatisticsBlock />}
    </div>
  );
}

export default App;
