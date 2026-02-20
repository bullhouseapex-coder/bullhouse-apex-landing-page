import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <main className={`${theme} min-h-screen bg-background text-foreground transition-all duration-300`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
