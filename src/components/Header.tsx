import React, { useState, useEffect } from 'react';
import { DrawerType } from '../types';

const XIcon = ({ className = "w-4 h-4", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface HeaderProps {
  activeDrawer: DrawerType;
  onOpenDrawer: (drawer: DrawerType) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  onNavigateSection,
}) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setTimeString(`${hours}:${mins}:${secs}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/80 flex items-center justify-between w-full transition-all"
      style={{
        paddingInline: 'var(--pad-x)',
        paddingBlock: 'var(--header-pt)',
      }}
    >
      {/* Brand Logo (Left) */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onOpenDrawer(null);
        }}
        className="font-orbitron font-black text-black tracking-[0.15em] flex items-center hover:opacity-80 transition-opacity text-left cursor-pointer"
        style={{ fontSize: 'var(--logo)' }}
      >
        <span>SHREEYANS RAJ</span>
        <span
          className="font-orbitron font-bold leading-none -mt-1 ml-0.5"
          style={{ fontSize: 'var(--logo-deg)' }}
        >
          ˚
        </span>
      </button>

      {/* Live Status Badge (Center - Hidden on Mobile) */}
      <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-widest text-gray-500 bg-gray-50 border border-gray-200/60 rounded-full px-3.5 py-1">
        <span className="flex items-center gap-1.5 text-black font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          AVAILABLE FOR CREATIVE ROLES
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-400">UTC {timeString}</span>
      </div>

      {/* Navigation Links (Right) */}
      <nav
        className="flex items-center font-jakarta font-medium uppercase tracking-[0.2em] text-black"
        style={{
          fontSize: 'var(--nav)',
          gap: 'var(--gap-nav)',
        }}
      >
        <button
          onClick={() => onNavigateSection('about')}
          className="hover:opacity-50 transition-opacity cursor-pointer"
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavigateSection('work')}
          className="hover:opacity-50 transition-opacity cursor-pointer"
        >
          WORK
        </button>
        <button
          onClick={() => onNavigateSection('contact')}
          className="hover:opacity-50 transition-opacity cursor-pointer"
        >
          CONTACT
        </button>

        {/* Gray Divider */}
        <span className="text-gray-300 font-light select-none">|</span>

        {/* X (formerly Twitter) Direct Link */}
        <a
          href="https://x.com/Mainhushreeyans"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity flex items-center gap-1.5 cursor-pointer text-black"
          aria-label="X @Mainhushreeyans"
        >
          <XIcon style={{ width: 'var(--icon)', height: 'var(--icon)' }} />
        </a>
      </nav>
    </header>
  );
};


