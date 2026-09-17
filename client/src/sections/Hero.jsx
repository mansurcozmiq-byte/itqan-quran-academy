import { academyImages } from "../data/images";
import { siteInfo, getWhatsAppLink, whatsappMessage } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__label">{siteInfo.name}</p>
          <h1 className="hero__title">
            শিশুর হাতে <span className="hero__accent">কুরআন</span>,
            <br />
            জীবনে ইসলামের সুন্দর ভিত্তি
          </h1>
          <p className="hero__text">
            স্কুল শিক্ষার পাশাপাশি কুরআন, নামাজ, ইসলামী জ্ঞান ও সুন্দর চরিত্র
            গঠনের জন্য একটি যত্নশীল শিক্ষার পরিবেশ।
          </p>
          <div className="hero__actions">
            <a
              href={getWhatsAppLink(whatsappMessage())}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              ভর্তির জন্য যোগাযোগ করুন
            </a>
            <a href="#about" className="btn btn-outline">
              আমাদের সম্পর্কে জানুন
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-frame islamic-window">
            <img
              src={academyImages.hero}
              alt="ইতকান কুরআন একাডেমি — ইসলামী শিক্ষা"
              className="hero__img"
              fetchPriority="high"
              width="640"
              height="720"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
