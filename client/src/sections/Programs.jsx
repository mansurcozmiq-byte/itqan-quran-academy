import { academyImages } from "../data/images";
import { programs, getWhatsAppLink, whatsappMessage } from "../data/content";
import "./Programs.css";

export default function Programs() {
  const featured = programs.find((p) => p.featured);
  const others = programs.filter((p) => !p.featured);

  return (
    <section id="programs" className="section programs">
      <div className="container">
        <div className="programs__header section-header-center">
          <span className="section-label">আমাদের শিক্ষা</span>
          <h2 className="section-title">আমাদের কোর্সসমূহ</h2>
        </div>

        {featured && (
          <article className="programs__featured">
            <div className="programs__featured-img">
              <img
                src={academyImages[featured.imageKey]}
                alt={featured.title}
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            <div className="programs__featured-body">
              <span className="programs__num">০১</span>
              <h3 className="programs__title">{featured.title}</h3>
              <p className="programs__desc">{featured.description}</p>
              <a
                href={getWhatsAppLink(whatsappMessage(featured.title))}
                className="btn btn-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                এই কোর্সে ভর্তি জানুন
              </a>
            </div>
          </article>
        )}

        <div className="programs__grid">
          {others.map((p, i) => (
            <article key={p.id} className="programs__card card-lift">
              <div className="programs__card-img">
                <img
                  src={academyImages[p.imageKey]}
                  alt={p.title}
                  loading="lazy"
                  width="400"
                  height="280"
                />
              </div>
              <div className="programs__card-body">
                <span className="programs__num">০{i + 2}</span>
                <h3 className="programs__title">{p.title}</h3>
                <p className="programs__desc">{p.description}</p>
                <a
                  href={getWhatsAppLink(whatsappMessage(p.title))}
                  className="programs__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  জানতে চাই →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
