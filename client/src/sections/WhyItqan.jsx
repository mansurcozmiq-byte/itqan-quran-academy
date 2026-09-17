import { whyItqan } from "../data/content";
import "./WhyItqan.css";

export default function WhyItqan() {
  return (
    <section className="section why">
      <div className="container">
        <div className="why__header">
          <span className="section-label">কেন আমরা</span>
          <h2 className="section-title">কেন ইতকান?</h2>
          <p className="section-subtitle">
            শেখা হোক আনন্দে, বেড়ে ওঠা হোক সুন্দর মূল্যবোধে।
          </p>
        </div>

        <div className="why__list">
          {whyItqan.map((item, i) => (
            <div key={item.num} className="why__item">
              <span className="why__num">{item.num}</span>
              <div className="why__body">
                <h3 className="why__title">{item.title}</h3>
                <p className="why__desc">{item.desc}</p>
              </div>
              {i < whyItqan.length - 1 && <div className="why__divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
