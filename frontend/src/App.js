import "@/App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.substring(1);

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash]);

  return null;
}

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
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}

export default App;