import { learningJourney } from "../data/content";
import "./LearningJourney.css";

export default function LearningJourney() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="journey__header">
          <span className="section-label">শিক্ষার ধারা</span>
          <h2 className="section-title">শেখার একটি সুন্দর পথ</h2>
        </div>

        <div className="journey__track">
          {learningJourney.map((step, i) => (
            <div key={step.num} className="journey__step">
              <div className="journey__circle">
                <span>{step.num}</span>
              </div>
              {i < learningJourney.length - 1 && (
                <div className="journey__line" aria-hidden="true" />
              )}
              <h3 className="journey__title">{step.title}</h3>
              <p className="journey__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
