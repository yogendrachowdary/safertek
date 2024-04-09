import React from 'react';
import './StudentTable.css';

function StudentTable() {
  // Mocked student data
  const students = [
    // Add mocked student data here
  ];

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Ticket's Number</th>
          <th>Rating Grade</th>
          <th>Exam Grade</th>
          <th>Final Grade</th>
          <th>Status</th>
          <th>Details</th> {/* Optional */}
        </tr>
      </thead>
      <tbody>
        {/* Render student rows here */}
      </tbody>
    </table>
  );
}

export default StudentTable;
