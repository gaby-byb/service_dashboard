import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <div className="bg-red-500 text-white p-4">Tailwind test</div>
    //   <Button variant="outline"> Click me </Button>
    // </>
  );
}

export default App;
