import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./LoginForm";
import DisplayData from "./DisplayData";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/nextPage" element={<DisplayData submittedData={submittedData} />} />
          <Route path="/" element={<LoginForm onSubmit={handleSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;