import React from 'react';

const collections = [
  {
    title: 'Banarasi Silk',
    image:
      'https://images.unsplash.com/photo-1610030469983-98c88a1b5c72?q=80&w=1974&auto=format&fit=crop',
    badge: 'Royal Weaves',
  },
  {
    title: 'Kanjivaram',
    image:
      'https://images.unsplash.com/photo-1550617927-9d07c6e5fe46?q=80&w=2070&auto=format&fit=crop',
    badge: 'South Classics',
  },
  {
    title: 'Organza Edit',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2069&auto=format&fit=crop',
    badge: 'Feather Light',
  },
  {
    title: 'Wedding Specials',
    image:
      'https://images.unsplash.com/photo-1618221510645-b70928a33254?q=80&w=2069&auto=format&fit=crop',
    badge: 'Bridal Glory',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Featured Collections</h2>
            <p className="text-neutral-600 mt-2">Curated picks that celebrate tradition and trend.</p>
          </div>
          <a href="#" className="text-rose-600 hover:text-rose-700">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs font-medium text-rose-700 bg-rose-100 px-2 py-1 rounded-full mb-2">
                  {c.badge}
                </span>
                <h3 className="font-medium text-neutral-900">{c.title}</h3>
                <button className="mt-3 text-sm text-rose-600 hover:text-rose-700">Shop now →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
