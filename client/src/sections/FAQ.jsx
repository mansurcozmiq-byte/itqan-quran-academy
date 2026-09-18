import { useState } from "react";
import { faqs } from "../data/content";
import "./FAQ.css";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container faq__wrap">
        <div className="faq__header section-header-center">
          <span className="section-label">প্রশ্নোত্তর</span>
          <h2 className="section-title">অভিভাবকদের সাধারণ প্রশ্ন</h2>
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${openIdx === i ? "faq__item--open" : ""}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
                id={`faq-q-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {openIdx === i ? "−" : "+"}
                </span>
              </button>
              <div
                className="faq__answer"
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={openIdx !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
