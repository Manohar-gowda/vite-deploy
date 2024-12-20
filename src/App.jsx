import React from "react";
import { Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="vite-deploy/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
