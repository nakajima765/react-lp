import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Company. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#hero">ホーム</a>
          <a href="#features">特徴</a>
          <a href="#cta">お問い合わせ</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
