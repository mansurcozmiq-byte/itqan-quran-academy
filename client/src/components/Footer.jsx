import { academyImages } from "../data/images";
import { siteInfo, getWhatsAppLink, whatsappMessage } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img src={academyImages.logo} alt="ইতকান কুরআন একাডেমি" width="48" height="48" />
            <span>ইতকান কুরআন একাডেমি</span>
          </a>
          <p className="footer__tagline">{siteInfo.tagline}</p>
        </div>

        <div className="footer__nav">
          <h4>নেভিগেশন</h4>
          <ul>
            <li><a href="#home">হোম</a></li>
            <li><a href="#about">আমাদের সম্পর্কে</a></li>
            <li><a href="#programs">কোর্সসমূহ</a></li>
            <li><a href="#faq">প্রশ্নোত্তর</a></li>
            <li><a href="#contact">যোগাযোগ</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>যোগাযোগ</h4>
          <ul>
            <li>{siteInfo.address}</li>
            <li>
              <a href={`tel:+${siteInfo.whatsapp}`}>{siteInfo.phone}</a>
            </li>
            <li>
              <a
                href={getWhatsAppLink(whatsappMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteInfo.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© ২০২৬ ইতকান কুরআন একাডেমি। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
