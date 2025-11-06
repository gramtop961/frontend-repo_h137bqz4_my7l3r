import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-rose-50">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-50 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-700 bg-white border border-rose-100 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Star size={14} className="fill-rose-600 text-rose-600" />
              New festive arrivals
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Elegance woven into every saree
            </h1>
            <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
              Discover handpicked collections from Banarasi, Kanjivaram, Organza, and more. Crafted by artisans, designed to make every occasion unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#collections" className="px-5 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition">Explore Collections</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:bg-white transition">Learn More</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Star className="text-amber-400 fill-amber-400" size={16} />
                <Star className="text-amber-400 fill-amber-400" size={16} />
                <Star className="text-amber-400 fill-amber-400" size={16} />
                <Star className="text-amber-400 fill-amber-400" size={16} />
                <Star className="text-amber-400 fill-amber-400" size={16} />
              </div>
              <span>Trusted by 5k+ customers</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98c88a1b5c72?q=80&w=1974&auto=format&fit=crop"
                alt="Saree model"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4 ring-1 ring-black/5">
              <p className="text-sm font-medium text-neutral-800">Handloom Certified</p>
              <p className="text-xs text-neutral-500">Authentic craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
