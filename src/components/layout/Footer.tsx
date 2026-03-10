import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-navy-900 text-lg font-black italic">DR</span>
          </div>
          <span className="text-xl font-bold tracking-tighter">Diego Rosa</span>
        </div>
        
        <div className="text-soft-white/40 text-sm font-medium">
          © {new Date().getFullYear()} Diego Rosa. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-soft-white/40 hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-soft-white/40 hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
