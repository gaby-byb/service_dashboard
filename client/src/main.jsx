import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </BrowserRouter>,
);
