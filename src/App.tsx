import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import Home from "./pages1/Home";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages1/Home"));
import "./App.css";


const App = () => {
  return (
      <HelmetProvider>
      <Router>
        <Navbar />

        <Routes>
            <Route
    path="/"
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    }
  />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
