import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
    xxl: "w-45 h-45",
  };

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 group transition-all ${className}`}
    >
      <div
        className={`relative ${sizeClasses[size]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
      >
        <img
          src="/assets/img/ddr-logo.png"
          alt="Diego Rosa Logo"
          className="w-full h-full left-[-6rem] md:left-[-16rem] object-contain relative z-10"
        />

        <div className="absolute inset-0 bg-[#79D88F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default Logo;