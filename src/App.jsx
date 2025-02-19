import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import "./index.css"; // ✅ ここで CSS を読み込む
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // ✅ AOS を初期化（1秒のアニメーション）
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
