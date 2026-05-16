import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Employees from "./pages/Employees";
import { ThemeProvider } from "@/components/theme-provider"; // Ensure this path is correct
import "./App.css";
import DashboardLayout from "./components/dashboard-layout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/employees" element={<Employees />} />
          </Route>
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
