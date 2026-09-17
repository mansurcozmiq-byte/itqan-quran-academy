import { academyImages } from "../data/images";
import "./ParentMessage.css";

export default function ParentMessage() {
  return (
    <section className="section parent">
      <div className="container parent__grid">
        <div className="parent__media">
          <img
            src={academyImages.parentChild}
            alt="অভিভাবক ও সন্তান"
            loading="lazy"
            width="560"
            height="420"
          />
        </div>
        <div className="parent__content">
          <span className="section-label">অভিভাবকদের জন্য</span>
          <h2 className="section-title">
            আপনার সন্তানের জন্য আজকের ছোট্ট শিক্ষা, আগামী দিনের সুন্দর ভিত্তি।
          </h2>
          <p className="parent__text">
            শৈশবের শেখাগুলো ধীরে ধীরে শিশুর অভ্যাস, মূল্যবোধ ও চরিত্র গড়ে তুলতে
            সাহায্য করে। স্কুল শিক্ষার পাশাপাশি কুরআন ও ইসলামী শিক্ষার একটি সুন্দর
            পরিবেশ তৈরি হোক ছোটবেলা থেকেই।
          </p>
        </div>
      </div>
    </section>
  );
}
