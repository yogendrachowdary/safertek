import React from 'react';
import './StatisticsBlock.css';

function StatisticsBlock() {
  // Mock statistical information (replace with actual data)
  const gradeCounts = {
    A: 10,
    B: 15,
    C: 20,
    D: 12,
    F: 8
  };

  const averageGrade = 'B';
  const maxGrade = 'A';
  const minGrade = 'F';
  const totalStudents = Object.values(gradeCounts).reduce((total, count) => total + count, 0);

  return (
    <div className="statistics-block">
      <h2 className="statistics-header">Statistics</h2>
      <div className="grade-counts">
        {Object.entries(gradeCounts).map(([grade, count]) => (
          <p key={grade}>{grade}: {count}</p>
        ))}
      </div>
      <p>Average Grade: {averageGrade}</p>
      <p>Max Grade: {maxGrade}</p>
      <p>Min Grade: {minGrade}</p>
      <p>Total Students: {totalStudents}</p>
    </div>
  );
}

export default StatisticsBlock;
