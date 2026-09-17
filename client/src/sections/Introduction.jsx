import { academyImages } from "../data/images";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section id="about" className="section intro">
      <div className="container intro__grid">
        <div className="intro__content">
          <span className="section-label">আমাদের দৃষ্টিভঙ্গি</span>
          <h2 className="section-title">
            শুধু পড়াশোনা নয়,
            <br />
            গড়ে উঠুক সুন্দর মানুষ
          </h2>
          <p className="intro__text">
            আমরা বিশ্বাস করি, একটি শিশুর সফলতা শুধু তার একাডেমিক ফলাফলে নয়।
            কুরআনের শিক্ষা, নামাজের অভ্যাস, ইসলামী জ্ঞান, আদব-আখলাক এবং সুন্দর
            চরিত্রও তার জীবনের গুরুত্বপূর্ণ অংশ।
          </p>
          <p className="intro__text">
            ইতকান কুরআন একাডেমিতে আমরা স্কুল শিক্ষার পাশাপাশি শিশুদের জন্য একটি
            যত্নশীল ও আনন্দময় ইসলামী শিক্ষার পরিবেশ তৈরি করেছি।
          </p>
        </div>
        <div className="intro__media islamic-window">
          <img
            src={academyImages.classroom}
            alt="ইতকান একাডেমির শ্রেণিকক্ষ"
            loading="lazy"
            width="600"
            height="720"
          />
        </div>
      </div>
    </section>
  );
}
