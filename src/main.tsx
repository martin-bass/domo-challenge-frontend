import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Import CSS and JS Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")!).render(<App />);
