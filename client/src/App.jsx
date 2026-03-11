import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "@/components/theme-provider"; // Ensure this path is correct
import "./App.css";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    // <>
    //   <div className="bg-red-500 text-white p-4">Tailwind test</div>
    //   <Button variant="outline"> Click me </Button>
    // </>
  );
}

export default App;
