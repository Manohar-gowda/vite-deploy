import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
