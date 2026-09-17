import { useState } from "react";
import { siteInfo, programs, getWhatsAppLink } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    age: "",
    course: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `আসসালামু আলাইকুম। ইতকান কুরআন একাডেমিতে ভর্তির আগ্রহ।

অভিভাবকের নাম: ${form.parentName}
সন্তানের নাম: ${form.childName}
বয়স: ${form.age}
আগ্রহের কোর্স: ${form.course || "নির্দিষ্ট নয়"}
ফোন: ${form.phone}
বার্তা: ${form.message || "কোনো অতিরিক্ত বার্তা নেই"}`;

    window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-label">যোগাযোগ</span>
          <h2 className="section-title">আমাদের সাথে কথা বলুন</h2>
          <ul className="contact__list">
            <li>
              <strong>ঠিকানা</strong>
              <span>{siteInfo.address}</span>
            </li>
            <li>
              <strong>মোবাইল</strong>
              <a href={`tel:+${siteInfo.whatsapp}`}>{siteInfo.phone}</a>
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a
                href={getWhatsAppLink("আসসালামু আলাইকুম। ইতকান কুরআন একাডেমি সম্পর্কে জানতে চাই।")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <strong>Facebook</strong>
              <a href={siteInfo.facebook} target="_blank" rel="noopener noreferrer">
                ইতকান কুরআন একাডেমি
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3 className="contact__form-title">ভর্তির আগ্রহ জানান</h3>

          <div className="contact__field">
            <label htmlFor="parentName">অভিভাবকের নাম *</label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              value={form.parentName}
              onChange={handleChange}
              placeholder="আপনার নাম"
            />
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="childName">সন্তানের নাম *</label>
              <input
                id="childName"
                name="childName"
                type="text"
                required
                value={form.childName}
                onChange={handleChange}
                placeholder="সন্তানের নাম"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="age">সন্তানের বয়স *</label>
              <input
                id="age"
                name="age"
                type="text"
                required
                value={form.age}
                onChange={handleChange}
                placeholder="যেমন: ৭"
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="course">আগ্রহের কোর্স</label>
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option value="">নির্বাচন করুন</option>
              {programs.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="phone">ফোন নম্বর *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">বার্তা</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="অতিরিক্ত কিছু জানাতে চাইলে লিখুন..."
            />
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            WhatsApp-এ পাঠান
          </button>
        </form>
      </div>
    </section>
  );
}
