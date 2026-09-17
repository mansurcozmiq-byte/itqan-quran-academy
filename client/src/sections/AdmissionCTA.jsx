import { academyImages } from "../data/images";
import { getWhatsAppLink, whatsappMessage } from "../data/content";
import "./AdmissionCTA.css";

export default function AdmissionCTA() {
  return (
    <section className="admission">
      <div className="admission__bg">
        <img
          src={academyImages.mosqueCta}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="admission__overlay" />
      </div>
      <div className="container admission__content">
        <h2 className="admission__title">
          ইতকানে শুরু হোক একটি সুন্দর শেখার যাত্রা
        </h2>
        <a
          href={getWhatsAppLink(whatsappMessage())}
          className="btn btn-primary admission__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ভর্তির জন্য যোগাযোগ করুন
        </a>
      </div>
    </section>
  );
}
