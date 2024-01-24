import React from 'react';

function DisplayData({ submittedData }) {
  return (
    <div>
      <h2>Submitted Data</h2>
      <p>Email: {submittedData.email}</p>
      <p>Password: {submittedData.password}</p>
    </div>
  );
}

export default DisplayData;