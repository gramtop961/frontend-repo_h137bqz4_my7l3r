import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-neutral-900">Sundari Sarees</h3>
            <p className="text-neutral-600 mt-2 text-sm max-w-sm">
              Timeless elegance, artisan craftsmanship, and contemporary designs. We bring the best of Indian handlooms to your wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-neutral-900">Shop</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><a href="#collections" className="hover:text-rose-700">New Arrivals</a></li>
                <li><a href="#collections" className="hover:text-rose-700">Best Sellers</a></li>
                <li><a href="#collections" className="hover:text-rose-700">Wedding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900">Support</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-rose-700">Shipping</a></li>
                <li><a href="#" className="hover:text-rose-700">Returns</a></li>
                <li><a href="#" className="hover:text-rose-700">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-900">Newsletter</h4>
            <p className="text-neutral-600 mt-2 text-sm">Join for styling tips and exclusive offers.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200"
                aria-label="Email address"
              />
              <button type="submit" className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
          © {new Date().getFullYear()} Sundari Sarees. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
