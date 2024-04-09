import React from 'react';
import './MainBlock.css';
import StudentTable from './StudentTable';

function MainBlock({ showStatistics, setShowStatistics }) {
  return (
    <div className="main-block">
      <div className="options">
        <button className="statistics-toggle" onClick={() => setShowStatistics(!showStatistics)}>
          {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
        </button>
      </div>
      <StudentTable />
    </div>
  );
}

export default MainBlock;
