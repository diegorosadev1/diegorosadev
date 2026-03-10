import React from "react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="block  max-w-[150px]">
          <Logo size="xxl" />
        </div>

        <div className="text-soft-white/40 text-sm font-medium">
          © {new Date().getFullYear()} Diego Rosa. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-soft-white/40 hover:text-accent transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-soft-white/40 hover:text-accent transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
