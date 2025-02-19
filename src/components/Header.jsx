import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">React LP</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#hero">ホーム</a>
          </li>
          <li>
            <a href="#features">特徴</a>
          </li>
          <li>
            <a href="#cta">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
