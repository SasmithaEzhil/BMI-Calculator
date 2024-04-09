import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Diet from "./Diet.jsx";
import Workout from "./Workout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Diet-Plan" element={<Diet />} />
      <Route path="/Workout-Plan" element={<Workout />} />
    </Routes>
  </BrowserRouter>
);
