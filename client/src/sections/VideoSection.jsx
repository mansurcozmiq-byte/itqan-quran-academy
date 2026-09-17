import { useState, useRef, useEffect } from "react";
import { academyImages, academyVideos } from "../data/images";
import "./VideoSection.css";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="section video-sec">
      <div className="container">
        <div className="video-sec__header">
          <span className="section-label">ভিডিও</span>
          <h2 className="section-title">ইতকানের কিছু মুহূর্ত</h2>
        </div>

        <div className="video-sec__wrap">
          <button
            className="video-sec__poster"
            onClick={() => setOpen(true)}
            aria-label="ভিডিও দেখুন"
          >
            <img
              src={academyImages.videoPoster}
              alt="ইতকান একাডেমির ভিডিও"
              loading="lazy"
              width="1280"
              height="720"
            />
            <span className="video-sec__play">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="video-sec__label">ভিডিও দেখুন</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="একাডেমি ভিডিও"
          onClick={() => setOpen(false)}
        >
          <div className="video-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal__close"
              onClick={() => setOpen(false)}
              aria-label="বন্ধ করুন"
            >
              ×
            </button>
            <video
              ref={videoRef}
              controls
              playsInline
              poster={academyImages.videoPoster}
              className="video-modal__player"
            >
              <source src={academyVideos.intro} type="video/mp4" />
              আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
            </video>
            <p className="video-modal__note">
              লোকাল ভিডিও ফাইল যোগ করুন: public/videos/academy-intro.mp4
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
