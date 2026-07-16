import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/health`, {
        method: "GET",
        cache: "no-store",
      }).catch(() => {
        // Ignore errors. This request is only to wake the backend.
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}

export default App;