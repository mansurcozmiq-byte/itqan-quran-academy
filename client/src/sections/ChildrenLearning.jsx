import { academyImages } from "../data/images";
import "./ChildrenLearning.css";

const moments = [
  { img: "quranClass", alt: "কুরআন পাঠ", label: "কুরআন পাঠ" },
  { img: "arabicWriting", alt: "আরবি লেখা", label: "আরবি হাতের লেখা" },
  { img: "dua", alt: "দোয়া শিক্ষা", label: "দোয়া শিক্ষা" },
  { img: "salah", alt: "নামাজ শিক্ষা", label: "নামাজ শিক্ষা" },
  { img: "teacher", alt: "শিক্ষক ও শিক্ষার্থী", label: "শিক্ষকের সাথে শেখা" },
  { img: "groupLearning", alt: "দলীয় শেখা", label: "একসাথে শেখা" },
];

export default function ChildrenLearning() {
  return (
    <section className="section children">
      <div className="container">
        <div className="children__header">
          <span className="section-label">আনন্দের সাথে শেখা</span>
          <h2 className="section-title">শেখার মাঝে থাকুক আনন্দ</h2>
        </div>

        <div className="children__grid">
          {moments.map((m) => (
            <figure key={m.img} className="children__item">
              <img
                src={academyImages[m.img]}
                alt={m.alt}
                loading="lazy"
                width="400"
                height="300"
              />
              <figcaption>{m.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
