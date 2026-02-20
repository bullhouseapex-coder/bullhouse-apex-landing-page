import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import FAQPage from "./pages/FAQPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import NotFound from "./pages/NotFound";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <header className={`${theme}`}>
        <Navbar />
      </header>
      <main className={`${theme} min-h-screen bg-background text-foreground transition-all duration-300`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
