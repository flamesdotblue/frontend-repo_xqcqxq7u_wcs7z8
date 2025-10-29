import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-10 text-sm text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-white font-medium">Let’s build something delightful</h3>
            <p>Have an idea? I’d love to hear it. I partner with startups and teams to design expressive products and brands.</p>
            <a href="mailto:hello@example.com" className="inline-block rounded-xl bg-white px-4 py-2 font-medium text-black hover:bg-white/90">hello@example.com</a>
          </div>
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} Minh Clone. All rights reserved.</p>
            <p className="mt-2 text-xs text-white/50">Built with React, Tailwind, and a dash of 3D.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
