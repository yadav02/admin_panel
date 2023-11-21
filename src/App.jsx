import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashbord";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Auth setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
