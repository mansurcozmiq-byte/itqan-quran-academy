import { useEffect, useState } from 'react';
import './App.css';
import {
  WHATSAPP_NUMBER,
  academy,
  programs,
  principles,
  journeySteps,
  trustItems,
  faqs,
  funMoments,
  WA_MESSAGES,
} from './data/content';

/** Single WhatsApp entry point — never hardcode wa.me elsewhere */
function openWhatsApp(message = WA_MESSAGES.general) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(null);

  // Defensive motion: content stays visible if GSAP never runs
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      prefersReduced ||
      typeof window.gsap === 'undefined' ||
      typeof window.ScrollTrigger === 'undefined'
    ) {
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    // Hero: enhance only — elements start visible in CSS
    const heroEls = document.querySelectorAll('.hero-text > *');
    if (heroEls.length) {
      gsap.from(heroEls, {
        y: 28,
        opacity: 0.15,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'opacity,transform',
      });
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      gsap.from(heroVisual, {
        y: 20,
        opacity: 0.2,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'opacity,transform',
      });
    }

    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 28,
        opacity: 0.2,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
    });

    gsap.utils.toArray('.img-reveal').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 16,
        opacity: 0.25,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);


  useEffect(() => {
    document.body.style.overflow =
      videoOpen || activeProgram ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [videoOpen, activeProgram]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const parent = fd.get('parent') || '';
    const child = fd.get('child') || '';
    const age = fd.get('age') || '';
    const phone = fd.get('phone') || '';
    const course = fd.get('course') || '';
    const message = fd.get('message') || '';

    const text = [
      'আসসালামু আলাইকুম। আমি আমার সন্তানের জন্য ইতকান কুরআন একাডেমি সম্পর্কে জানতে চাই।',
      '',
      `অভিভাবকের নাম: ${parent}`,
      `সন্তানের নাম: ${child}`,
      `বয়স: ${age}`,
      `ফোন: ${phone}`,
      `আগ্রহের কোর্স: ${course}`,
      message ? `বার্তা: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    openWhatsApp(text);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        মূল বিষয়ে যান
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo">
           <div>
            <img src={academy.logo} alt={academy.name} className="logo-img" />
           </div>
            <span className="logo-text">
              <span className="logo-bn">ইতকান</span>
              <span className="logo-en">কুরআন একাডেমি</span>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} id="primary-nav">
            <ul className="nav-list">
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  আমাদের কথা
                </a>
              </li>
              <li>
                <a href="#programs" onClick={() => setMenuOpen(false)}>
                  প্রোগ্রামসমূহ
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => setMenuOpen(false)}>
                  প্রশ্নোত্তর
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="nav-cta btn btn-primary"
            onClick={() => openWhatsApp(WA_MESSAGES.admission)}
            aria-label="ইতকান কুরআন একাডেমিতে ভর্তি সম্পর্কে WhatsApp-এ যোগাযোগ করুন"
          >
            ভর্তি
          </button>

          <button
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <img
              className="hero-bg-img"
              src="https://images.pexels.com/photos/13748548/pexels-photo-13748548.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt=""
            />
            <div className="hero-bg-overlay" />
          </div>
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-text">
              <p className="hero-eyebrow">ইতকান কুরআন একাডেমি [একটি আফটার-স্কুল মকতব]</p>
              <h1 className="hero-title">
                শিশুর হাতে <span className="em">কুরআন</span>,
                <br />
                জীবনে ইসলামের সুন্দর ভিত্তি গড়তে
              </h1>
              <p className="hero-desc">
                স্কুল শিক্ষার্থীদের জন্য - স্কুল শিক্ষার পাশাপাশি কুরআন, নামাজ, ইসলামী জ্ঞান ও সুন্দর চরিত্র
                গঠনের জন্য একটি যত্নশীল শিক্ষার পরিবেশ।
              </p>
              <div className="hero-ctas">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openWhatsApp(WA_MESSAGES.admission)}
                  aria-label="ভর্তির জন্য WhatsApp-এ যোগাযোগ করুন"
                >
                  ভর্তির জন্য যোগাযোগ করুন
                </button>
                <a href="#about" className="btn btn-secondary">
                  আমাদের সম্পর্কে জানুন
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-arch">
                <img
                  src="https://images.pexels.com/photos/30312945/pexels-photo-30312945.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="শিশু কুরআন পড়ছে"
                />
              </div>
              <div className="hero-secondary">
                <img
                  src="https://images.pexels.com/photos/33968339/pexels-photo-33968339.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="মনোযোগী শিক্ষার্থী"
                />
              </div>
              <div className="hero-ornament" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.35"
                  />
                  <path
                    d="M24 10 V14 M24 34 V38 M10 24 H14 M34 24 H38"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section" id="about">
          <div className="container">
            <div className="intro-grid reveal">
              <div className="intro-left">
                <p className="section-label">আমাদের কথা</p>
                <h2 className="section-heading">
                  শুধু পড়াশোনা নয়,
                  <br />
                  গড়ে উঠুক সুন্দর মানুষ
                </h2>
              </div>
              <div className="intro-right">
                <p>
                  ইতকান কুরআন একাডেমি একটি আধুনিক ইসলামী শিক্ষা প্রতিষ্ঠান যেখানে
                  শিশুরা স্কুলের পাশাপাশি কুরআন, নামাজ, ইসলামী জ্ঞান ও সুন্দর আদব
                  শেখে। আমরা বিশ্বাস করি শৈশবের শিক্ষাই পরবর্তী জীবনের চরিত্র
                  গঠনের ভিত্তি।
                </p>
                <p>
                  এখানে প্রতিটি শিশুকে ব্যক্তিগত মনোযোগ দেওয়া হয়, যাতে শেখা হয়
                  আনন্দে এবং বেড়ে ওঠে সুন্দর মূল্যবোধে।
                </p>
              </div>
            </div>
            <div className="intro-photo img-reveal">
              <img
                src="https://images.unsplash.com/photo-1629273229664-11fabc0becc0?auto=compress&cs=tinysrgb&w=1400"
                alt="একাডেমির ক্লাসরুমে শিশুরা"
              />
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust-strip">
          <div className="container">
            <ul className="trust-list">
              {trustItems.map((item) => (
                <li key={item.num} className="trust-item">
                  <span className="trust-num">{item.num}</span>
                  <span className="trust-title">{item.title}</span>
                  <span className="trust-desc">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY */}
        <section className="why section">
          <div className="container">
            <div className="why-grid">
              <div className="why-image img-reveal">
                <div className="arch-frame">
                  <img
                    src="https://images.pexels.com/photos/9127846/pexels-photo-9127846.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="কুরআন পড়া শিশু"
                  />
                </div>
              </div>
              <div className="why-content reveal">
                <p className="section-label">কেন ইতকান একাডেমি?</p>
                <h2 className="section-heading">
                  শেখা হোক আনন্দে, বেড়ে ওঠা হোক ইসলামী মূল্যবোধে।
                </h2>
                <ul className="principles">
                  {principles.map((p) => (
                    <li key={p.num} className="principle-item">
                      <span className="principle-num">{p.num}</span>
                      <div>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="programs section" id="programs">
          <div className="container">
            <div className="programs-header reveal">
              <p className="section-label">আমাদের প্রোগ্রামসমূহ</p>
              <h2 className="section-heading">পাঁচটি সুন্দর শেখার পথ</h2>
            </div>

            <article className="program-featured reveal">
              <div className="program-featured-img">
                <img src={programs[0].image} alt={programs[0].title} />
              </div>
              <div className="program-featured-body">
                <span className="program-num">{programs[0].id}</span>
                <h3>{programs[0].title}</h3>
                <p>{programs[0].description}</p>
                <p className="program-meta">
                  {programs[0].age} · {programs[0].duration}
                </p>
                <div className="program-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openWhatsApp(WA_MESSAGES.course(programs[0].title))}
                  >
                    বিস্তারিত জানতে WhatsApp করুন
                  </button>
                  <button
                    type="button"
                    className="program-link"
                    onClick={() => setActiveProgram(programs[0])}
                  >
                    আরও দেখুন →
                  </button>
                </div>
              </div>
            </article>

            <div className="programs-secondary">
              {programs.slice(1).map((prog) => (
                <article
                  key={prog.id}
                  className={`program-card accent-${prog.accent} reveal`}
                >
                  <div className="program-img-wrap">
                    <img src={prog.image} alt={prog.title} />
                  </div>
                  <div className="program-body">
                    <span className="program-num">{prog.id}</span>
                    <h3>{prog.title}</h3>
                    <p>{prog.description}</p>
                    <div className="program-actions">
                      <button
                        type="button"
                        className="program-link"
                        onClick={() => openWhatsApp(WA_MESSAGES.course(prog.title))}
                      >
                        WhatsApp-এ জানুন →
                      </button>
                      <button
                        type="button"
                        className="program-link muted"
                        onClick={() => setActiveProgram(prog)}
                      >
                        বিস্তারিত
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {activeProgram && (
          <div className="program-modal" role="dialog" aria-modal="true">
            <button
              className="modal-close"
              onClick={() => setActiveProgram(null)}
              aria-label="বন্ধ"
            >
              ✕
            </button>
            <div className="program-modal-inner">
              <div className="program-modal-img">
                <img src={activeProgram.image} alt={activeProgram.title} />
              </div>
              <div className="program-modal-body">
                <span className="program-num">{activeProgram.id}</span>
                <h2>{activeProgram.title}</h2>
                <p className="program-modal-desc">{activeProgram.detail}</p>
                <ul className="program-meta-list">
                  <li>
                    <strong>উপযুক্ত বয়স</strong> {activeProgram.age}
                  </li>
                  <li>
                    <strong>সময়কাল</strong> {activeProgram.duration}
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    openWhatsApp(WA_MESSAGES.course(activeProgram.title));
                    setActiveProgram(null);
                  }}
                >
                  বিস্তারিত জানতে WhatsApp করুন
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ARCH BREAK */}
        <section className="arch-break">
          <div className="arch-pattern" aria-hidden="true" />
          <div className="container">
            <p className="arch-break-text reveal">
              জ্ঞান, আমল ও সুন্দর চরিত্রের পথে
            </p>
          </div>
        </section>

        {/* JOURNEY */}
        {/* <section className="journey section">
          <div className="container">
            <div className="journey-header reveal">
              <p className="section-label">শেখার যাত্রা</p>
              <h2 className="section-heading">শেখার একটি সুন্দর পথ</h2>
            </div>
            <ol className="journey-steps">
              {journeySteps.map((step, i) => (
                <li key={i} className="journey-step reveal">
                  <span className="step-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section> */}


        {/* VIDEO
        <section className="video-section section">
          <div className="container">
            <div className="video-header reveal">
              <p className="section-label">ভিডিও</p>
              <h2 className="section-heading">ইতকানের গল্প, চলমান ছবিতে</h2>
            </div>
            <div
              className="video-preview reveal"
              onClick={() => setVideoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setVideoOpen(true)}
            >
              <img
                src="https://images.pexels.com/photos/9383055/pexels-photo-9383055.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="ভিডিও প্রিভিউ"
              />
              <div className="video-overlay">
                <span className="video-play" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M8 5 L22 14 L8 23 Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="video-label">ভিডিও দেখুন</span>
              </div>
            </div>
          </div>
        </section>

        {videoOpen && (
          <div className="video-modal" role="dialog" aria-modal="true">
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setVideoOpen(false)}
              aria-label="বন্ধ"
            >
              ✕
            </button>
            <div className="video-modal-inner">
              <div className="video-placeholder">
                <p>একাডেমির ভিডিও এখানে যোগ করা হবে।</p>
                <p className="video-note">প্রকৃত ফুটেজ উপলব্ধ হলে এখানে এম্বেড করুন।</p>
              </div>
            </div>
          </div>
        )} */}

        {/* FUN LEARNING */}
        <section className="fun-learning section">
          <div className="container">
            <div className="fun-header reveal">
              <p className="section-label">আনন্দময় শেখা</p>
              <h2 className="section-heading">শেখার মাঝে থাকুক আনন্দ</h2>
            </div>
            <div className="fun-grid">
              {funMoments.map((item, i) => (
                <div key={i} className="fun-item reveal">
                  <div className="fun-img-wrap">
                    <img src={item.src} alt={item.label} />
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARENT */}
        <section className="parent-msg section">
          <div className="container">
            <div className="parent-grid">
              <div className="parent-text reveal">
                <h2 className="parent-quote">
                  আপনার সন্তানের জন্য
                  <br />
                  আজকের ছোট্ট শিক্ষা,
                  <br />
                  আগামী দিনের সুন্দর ভিত্তি।
                </h2>
                <p>
                  শৈশবের শেখাগুলো ধীরে ধীরে শিশুর অভ্যাস, মূল্যবোধ ও চরিত্র গড়ে
                  তুলতে সাহায্য করে। স্কুল শিক্ষার পাশাপাশি কুরআন ও ইসলামী শিক্ষার
                  একটি সুন্দর পরিবেশ তৈরি হোক ছোটবেলা থেকেই।
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => openWhatsApp(WA_MESSAGES.admission)}
                  aria-label="ভর্তি সম্পর্কে WhatsApp-এ জানুন"
                >
                  ভর্তি সম্পর্কে জানুন
                </button>
              </div>
              <div className="parent-img img-reveal">
                <div className="arch-frame">
                  <img
                    src="https://images.pexels.com/photos/33968339/pexels-photo-33968339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="শিশু ও শিক্ষক"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADMISSION */}
        <section className="admission section" id="admission">
          <div className="admission-pattern" aria-hidden="true" />
          <div className="container admission-content reveal">
            <h2>
              ইতকান একাডেমিতে শুরু হোক
              <br />
              একটি সুন্দর শেখার যাত্রা
            </h2>
            <p>
              ভর্তি চলছে। আপনার সন্তানের বয়স ও প্রয়োজন অনুযায়ী উপযুক্ত কোর্স ও ব্যাচ
              সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <div className="admission-ctas">
              <button
                type="button"
                className="btn btn-white"
                onClick={() => openWhatsApp(WA_MESSAGES.admission)}
                aria-label="ভর্তির জন্য WhatsApp-এ যোগাযোগ করুন"
              >
                ভর্তির জন্য যোগাযোগ করুন
              </button>
              <a href="#contact" className="btn btn-outline-white">
                ভর্তি ফরম দেখুন
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq section" id="faq">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-header reveal">
                <p className="section-label">প্রশ্নোত্তর</p>
                <h2 className="section-heading">
                  অভিভাবকদের
                  <br />
                  সাধারণ প্রশ্ন
                </h2>
              </div>
              <div className="faq-list">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className={`faq-item ${activeFaq === i ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-q"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      aria-expanded={activeFaq === i}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {activeFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    <div className="faq-a" hidden={activeFaq !== i}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info reveal">
                <p className="section-label">যোগাযোগ</p>
                <h2 className="section-heading">আমাদের সাথে কথা বলুন</h2>
                <p className="contact-desc">
                  ভর্তি, কোর্স বা যেকোনো প্রশ্নের জন্য নিচের ফর্মটি পূরণ করুন অথবা
                  সরাসরি WhatsApp-এ যোগাযোগ করুন।
                </p>
                <ul className="contact-details">
                  <li>
                    <strong>ফোন / WhatsApp</strong>
                    <span>{academy.phone}</span>
                  </li>
                  <li>
                    <strong>ফেসবুক</strong>
                    <span>{academy.facebook}</span>
                  </li>
                  <li>
                    <strong>ঠিকানা</strong>
                    <span>{academy.address}</span>
                  </li>
                  <li>
                    <strong>সময়সূচি</strong>
                    <span>{academy.hours}</span>
                  </li>
                </ul>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openWhatsApp(WA_MESSAGES.general)}
                  aria-label="WhatsApp-এ যোগাযোগ করুন"
                >
                  WhatsApp-এ যোগাযোগ করুন
                </button> */}
              </div>
              <form className="contact-form reveal" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <label>
                    অভিভাবকের নাম
                    <input
                      type="text"
                      name="parent"
                      required
                      placeholder="আপনার নাম"
                    />
                  </label>
                  <label>
                    সন্তানের নাম
                    <input
                      type="text"
                      name="child"
                      required
                      placeholder="সন্তানের নাম"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    সন্তানের বয়স
                    <input
                      type="number"
                      name="age"
                      min="3"
                      max="15"
                      required
                      placeholder="বছর"
                    />
                  </label>
                  <label>
                    ফোন নম্বর
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="০১XXXXXXXXX"
                    />
                  </label>
                </div>
                <label>
                  আগ্রহের প্রোগ্রাম
                  <select name="course" required defaultValue="">
                    <option value="" disabled>
                      প্রোগ্রাম নির্বাচন করুন
                    </option>
                    {programs.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  আপনার জিজ্ঞাসা/তথ্য
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="আপনার প্রশ্ন বা মন্তব্য..."
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-pattern" aria-hidden="true" />
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>ইতকান</h3>
              <p>কুরআন ও ইসলামী শিক্ষার সুন্দর ভিত্তি</p>
            </div>
            <div className="footer-nav">
              <h4>লিংক</h4>
              <ul>
                <li>
                  <a href="#about">আমাদের কথা</a>
                </li>
                <li>
                  <a href="#programs">প্রোগ্রামসমূহ</a>
                </li>
                <li>
                  <a href="#faq">প্রশ্নোত্তর</a>
                </li>
                <li>
                  <a href="#contact">যোগাযোগ</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>যোগাযোগ</h4>
              <p>{academy.phone}</p>
              <p>{academy.address}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© ২০২৬ ইতকান কুরআন একাডেমি। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp — solid, no glow/bubble */}
      <button
        type="button"
        className="wa-float"
        onClick={() => openWhatsApp(WA_MESSAGES.admission)}
        aria-label="ইতকান কুরআন একাডেমিতে ভর্তি সম্পর্কে WhatsApp-এ যোগাযোগ করুন"
      >
        <svg
          className="wa-float-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="wa-float-label">WhatsApp-এ কথা বলুন</span>
      </button>
    </>
  );
}

export default App;
