import { useRef } from "react";
import gsap from "gsap";
import "./CTA.css";

const CTA = () => {
  const buttonRef = useRef(null);

  // クリック時の波紋エフェクト
  const handleClick = (event) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = buttonRef.current.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    buttonRef.current.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className="cta">
      <h2 data-aos="fade-up">今すぐ始めよう！</h2>
      <button
        className="cta-button glass-glow-button"
        ref={buttonRef}
        onClick={handleClick}
      >
        無料で試す
      </button>
    </section>
  );
};

export default CTA;
