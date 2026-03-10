import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    xxl: "w-24 h-24",
  };

  return (
    <Link
      to="/"
      className={`flex items-center group transition-all ${className}`}
    >
      <div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
      >
        <img
          src="/assets/img/ddr-logo.png"
          alt="Diego Rosa Logo"
          className="w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-[#79D88F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default Logo;
