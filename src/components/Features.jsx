import { faRocket, faCode, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Features.css"; // CSSを適用する

const features = [
  {
    icon: faRocket,
    title: "高速な開発",
    description: "Reactで素早く開発、短期間でLPを公開！",
  },
  {
    icon: faCode,
    title: "クリーンなコード",
    description: "コンポーネント単位で管理し、メンテナンスが簡単！",
  },
  {
    icon: faRecycle,
    title: "再利用性の向上",
    description: "パーツを使い回して、より効率的な開発が可能！",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2 data-aos="fade-up">このLPの特徴</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="icon-container">
              <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
