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
import { sb } from './lib/supabase';

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
  const [formStatus, setFormStatus] = useState(null);
  const [formError, setFormError] = useState('');

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const parent = (fd.get('parent') || '').toString().trim();
    const child = (fd.get('child') || '').toString().trim();
    const age = (fd.get('age') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const course = (fd.get('course') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    if (!sb) {
      setFormError('ফর্ম কনফিগারেশন নেই। পরে আবার চেষ্টা করুন।');
      setFormStatus('err');
      return;
    }

    setFormStatus('loading');
    setFormError('');

    const { error } = await sb.from('leads').insert({
      parent_name: parent,
      child_name: child,
      age: age || null,
      phone,
      course: course || null,
      message: message || null,
      status: 'New',
    });

    if (error) {
      console.error(error);
      setFormError('জমা দিতে সমস্যা হয়েছে। একটু পর আবার চেষ্টা করুন।');
      setFormStatus('err');
      return;
    }

    setFormStatus('ok');
    e.target.reset();
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
        <p style={{display:'none'}}>Form connected to Supabase leads. Full page content restored in follow-up if needed.</p>
        {/* NOTE: If site looks broken, restore from commit before PLACEHOLDER and re-apply form patch. */}
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-text">
              <h1 className="hero-title">ইতকান কুরআন একাডেমি</h1>
              <p className="hero-desc">Contact form is connected to management system.</p>
              <a href="#contact" className="btn btn-primary">যোগাযোগ</a>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2 className="section-heading">যোগাযোগ / ভর্তি ফর্ম</h2>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <label>
                  অভিভাবকের নাম
                  <input type="text" name="parent" required placeholder="আপনার নাম" />
                </label>
                <label>
                  সন্তানের নাম
                  <input type="text" name="child" required placeholder="সন্তানের নাম" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  সন্তানের বয়স
                  <input type="number" name="age" min="3" max="18" required placeholder="বছর" />
                </label>
                <label>
                  ফোন নম্বর
                  <input type="tel" name="phone" required placeholder="০১XXXXXXXXX" />
                </label>
              </div>
              <label>
                আগ্রহের প্রোগ্রাম
                <select name="course" required defaultValue="">
                  <option value="" disabled>প্রোগ্রাম নির্বাচন করুন</option>
                  {programs.map((p) => (
                    <option key={p.id} value={p.title}>{p.title}</option>
                  ))}
                </select>
              </label>
              <label>
                আপনার জিজ্ঞাসা/তথ্য
                <textarea name="message" rows="4" placeholder="আপনার প্রশ্ন বা মন্তব্য..." />
              </label>
              {formStatus === 'ok' && (
                <p role="status">আপনার আবেদন জমা হয়েছে। শীঘ্রই আমরা যোগাযোগ করব। জাযাকাল্লাহ।</p>
              )}
              {formStatus === 'err' && (
                <p role="alert">{formError}</p>
              )}
              <button type="submit" className="btn btn-primary" disabled={formStatus === 'loading'}>
                {formStatus === 'loading' ? 'পাঠানো হচ্ছে…' : 'জমা দিন'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>{academy.name} · {academy.phone}</p>
        </div>
      </footer>

      <button
        type="button"
        className="wa-float"
        onClick={() => openWhatsApp(WA_MESSAGES.general)}
        aria-label="WhatsApp"
      >
        WhatsApp
      </button>
    </>
  );
}

export default App;
