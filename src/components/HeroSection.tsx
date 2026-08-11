import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface HeroSectionProps {
  onMenuClick?: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC<HeroSectionProps> = ({ onMenuClick }) => {
  return (
    <section className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-white text-black shrink-0">
      {/* 1. Sub-Header Controls inside NeuralKinetics Section */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeCurve }}
        className="absolute top-16 md:top-20 left-0 right-0 z-20 flex items-center justify-between p-4 md:px-8 md:py-3 pointer-events-none"
      >
        {/* Left Side Controls */}
        <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 text-black font-semibold text-sm md:text-base tracking-tight no-underline">
            <svg
              className="w-6 h-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="rotate(-35 12 12)">
                <rect x="4" y="6" width="10" height="12" rx="3" fill="#000000" />
                <rect x="10" y="6" width="10" height="12" rx="3" fill="#000000" fillOpacity="0.8" />
              </g>
            </svg>
            <span className="hidden md:inline-block font-inter font-semibold">NeuralKinetics</span>
          </a>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="bg-black text-white border-none rounded-full py-1 pr-3 pl-1 flex items-center gap-2 cursor-pointer font-inter text-xs font-medium hover:opacity-85 transition-opacity"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center">
              <Plus size={12} strokeWidth={3} />
            </div>
            <span>Menu</span>
          </button>

          {/* Tags Pill */}
          <div className="hidden md:flex bg-[#F4F4F6] rounded-full px-4 py-2 items-center gap-3 text-xs font-medium text-black font-inter">
            <span>Digital Interfaces</span>
            <div className="w-1 h-1 rounded-full bg-black/25" />
            <span>Software Architecture</span>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="bg-[#F4F4F6] rounded-full py-1 pr-3 pl-1 flex items-center gap-2 text-xs font-medium text-black font-inter">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black text-white flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                <circle cx="9" cy="3" r="1.5" fill="currentColor" />
                <circle cx="3" cy="9" r="1.5" fill="currentColor" />
                <circle cx="9" cy="9" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="hidden md:inline-block pr-1">Creative Tech</span>
          </div>
        </div>
      </motion.nav>

      {/* 2. Background Video */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: easeCurve }}
        className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      >
        <video
          className="w-full h-full object-cover block"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      {/* 3. Footer Content over White Gradient */}
      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: easeCurve }}
        className="relative z-10 w-full mt-auto bg-gradient-to-t from-white via-white/80 to-transparent pt-12 pb-8 px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        {/* Left Block */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
          {/* Subtitle */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeCurve }}
            className="flex items-center gap-2 text-xs md:text-sm text-black/60 font-inter font-normal"
          >
            <div className="w-2 h-2 rounded-full bg-black" />
            <span>Personal Digital Archive — Shreeyans Raj</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeCurve }}
            className="font-inter font-light text-black tracking-tight leading-none text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] m-0"
          >
            Form, Structure <br />
            & Pure Code.
          </motion.h1>

          {/* Buttons Row */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeCurve }}
            className="flex items-center gap-3 pt-1"
          >
            <a
              href="#about"
              className="bg-black text-white border border-black rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-inter transition-colors hover:bg-neutral-800 no-underline"
            >
              Explore About
            </a>
            <a
              href="#work"
              className="bg-transparent text-black border border-black/30 rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-inter transition-all hover:border-black hover:bg-black/5 no-underline"
            >
              Selected Work
            </a>
          </motion.div>
        </div>

        {/* Right Block Tags */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: easeCurve }}
          className="flex items-center gap-2 flex-wrap"
        >
          <div className="bg-white border border-black/10 rounded-full px-3.5 py-1.5 text-xs font-medium text-black font-inter">
            UI/UX Design
          </div>
          <div className="bg-white border border-black/10 rounded-full px-3.5 py-1.5 text-xs font-medium text-black font-inter">
            Frontend Dev
          </div>
          <div className="bg-white border border-black/10 rounded-full px-3.5 py-1.5 text-xs font-medium text-black font-inter">
            Architecture
          </div>
        </motion.div>
      </motion.footer>
    </section>
  );
};
