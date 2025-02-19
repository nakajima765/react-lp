import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* 🎥 背景動画を追加 */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="https://nakajima765.github.io/react-lp/videos/hero-video.mp4" type="video/mp4" />
        あなたのブラウザは動画タグをサポートしていません。
      </video>

      <div className="hero-content">
        <h2 className="hero-title">未来を体験しよう</h2>
        <p className="hero-text">ReactでプロフェッショナルなLPを作成！</p>
        <button className="glass-glow-button">今すぐ登録</button>
      </div>
    </section>
  );
};

export default Hero;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./Hero.css";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const textRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     gsap.fromTo(
//       titleRef.current,
//       { y: -50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, delay: 0.5 }
//     );
//     gsap.fromTo(
//       textRef.current,
//       { y: -30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, delay: 0.7 }
//     );
//     gsap.fromTo(
//       buttonRef.current,
//       { scale: 0.7, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1, delay: 0.9 }
//     );
//   }, []);

//   return (
//     <section className="hero" ref={heroRef}>
//       <h2 className="hero-title" ref={titleRef}>
//         Reactで作るランディングページ！
//       </h2>
//       <p className="hero-text" ref={textRef}>
//         Reactのコンポーネントを使って簡単にLPを作ろう！
//       </p>
//       <button className="hero-button" ref={buttonRef}>
//         今すぐ登録
//       </button>
//     </section>
//   );
// };

// export default Hero;
