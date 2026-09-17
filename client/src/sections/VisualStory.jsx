import { academyImages } from "../data/images";
import "./VisualStory.css";

export default function VisualStory() {
  return (
    <section className="section story">
      <div className="container">
        <div className="story__header">
          <span className="section-label">একাডেমির মুহূর্ত</span>
          <h2 className="section-title">ইতকানের কিছু স্মরণীয় মুহূর্ত</h2>
        </div>

        <div className="story__layout">
          <figure className="story__large">
            <img
              src={academyImages.gallery1}
              alt="একাডেমির প্রধান কার্যক্রম"
              loading="lazy"
              width="800"
              height="500"
            />
          </figure>
          <div className="story__side">
            <figure className="story__small">
              <img
                src={academyImages.gallery2}
                alt="শ্রেণিকক্ষের দৃশ্য"
                loading="lazy"
                width="400"
                height="280"
              />
            </figure>
            <figure className="story__small">
              <img
                src={academyImages.gallery3}
                alt="শিক্ষার্থীদের কার্যক্রম"
                loading="lazy"
                width="400"
                height="280"
              />
            </figure>
          </div>
          <figure className="story__vertical">
            <img
              src={academyImages.gallery4}
              alt="ইতকানের শিক্ষার্থী"
              loading="lazy"
              width="400"
              height="600"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
