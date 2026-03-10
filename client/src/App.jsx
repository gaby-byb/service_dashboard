import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./app/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
