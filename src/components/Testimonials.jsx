import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha Sharma',
    text:
      'Absolutely loved the quality and the intricate work. The saree made my day so special! Shipping was quick and packaging was elegant.',
  },
  {
    name: 'Meera Iyer',
    text:
      'The Kanjivaram collection is breathtaking. Authentic weave and vibrant colors. Customer support was so helpful with sizing.',
  },
  {
    name: 'Riya Kapoor',
    text:
      'Beautiful drape and super comfortable. Got so many compliments at the wedding! Will definitely shop again.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-full bg-rose-100 grid place-content-center">
            <Quote size={18} className="text-rose-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <p className="text-neutral-700 leading-relaxed">“{t.text}”</p>
              <footer className="mt-4 text-sm font-medium text-neutral-900">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
