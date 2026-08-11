import React from 'react';
import { X, Copy, Check, ArrowUpRight } from 'lucide-react';
import { DrawerType, WorkStudy } from '../types';

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SideDrawerProps {
  activeDrawer: DrawerType;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

const workStudies: WorkStudy[] = [
  {
    id: '01',
    tag: 'INTERFACE STUDY',
    title: 'FORM & COMPOSITION',
    description: 'Interface studies exploring form and composition through pure white grid layouts and fluid typographic systems.',
  },
  {
    id: '02',
    tag: 'CODE EXPERIMENT',
    title: 'LOGIC & STRUCTURE',
    description: 'Code experiments shaped by logic and structure, focusing on reactive state canvas masks and spatial performance.',
  },
  {
    id: '03',
    tag: 'EVOLVING SYSTEM',
    title: 'CURIOSITY & INTENT',
    description: 'Evolving systems driven by curiosity and intent, bridging functional clarity with restrained aesthetic detail.',
  },
];

export const SideDrawer: React.FC<SideDrawerProps> = ({
  activeDrawer,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!activeDrawer) return null;

  const handleCopyHandle = () => {
    navigator.clipboard.writeText('@Mainhushreeyans');
    setCopied(true);
    onShowToast('Copied handle @Mainhushreeyans to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const getDrawerTitle = () => {
    switch (activeDrawer) {
      case 'ABOUT':
        return '/ ABOUT';
      case 'WORK':
        return '/ SELECTED WORK';
      case 'CONTACT':
        return '/ CONTACT';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Right-Side Drawer Panel */}
      <div
        className="relative z-10 bg-white border-l border-gray-200 h-full w-full flex flex-col justify-between shadow-2xl overflow-y-auto"
        style={{
          maxWidth: 'var(--drawer-max)',
          padding: 'var(--drawer-pad)',
        }}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
            <h2 className="font-orbitron font-bold uppercase text-black tracking-wider text-base sm:text-lg">
              {getDrawerTitle()}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 text-black hover:opacity-50 transition-opacity cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ABOUT CONTENT */}
          {activeDrawer === 'ABOUT' && (
            <div className="space-y-5 pt-1 text-xs sm:text-sm font-jakarta leading-relaxed text-gray-800">
              <p className="font-medium text-black text-sm sm:text-base">
                Hi, I’m <span className="font-bold underline decoration-2 decoration-black">Shreeyans</span>.
              </p>

              <p className="text-gray-600">
                I completed my schooling at <span className="text-black font-semibold">Bijendra Public School</span> (4th–10th grade) and am currently in <span className="text-black font-semibold">12th Grade</span>.
              </p>

              <p className="text-gray-600">
                I’m deeply passionate about programming, digital art, and gaming. What excites me most is learning how systems, machines, and software function beneath the surface.
              </p>

              <p className="text-gray-600">
                I aim to be a kind, positive presence in everything I do—creating tools and software that make people happy while delivering real technical quality.
              </p>

              <div className="pt-6 border-t border-gray-100 space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-black font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  Building with purpose.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                  Driven by curiosity & kindness.
                </p>
              </div>
            </div>
          )}

          {/* WORK CONTENT */}
          {activeDrawer === 'WORK' && (
            <div className="space-y-5 pt-1">
              {workStudies.map((work) => (
                <div
                  key={work.id}
                  className="p-4 border border-gray-100 hover:border-black transition-colors space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400">
                      {work.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-black">
                      {work.id}
                    </span>
                  </div>
                  <h3 className="font-orbitron font-bold text-xs uppercase tracking-wide text-black group-hover:underline">
                    {work.title}
                  </h3>
                  <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CONTACT CONTENT */}
          {activeDrawer === 'CONTACT' && (
            <div className="space-y-6 pt-2">
              <p className="font-jakarta text-xs sm:text-sm text-gray-700 leading-relaxed">
                For select conversations and thoughtful ideas.
              </p>

              <div className="p-4 border border-gray-200 bg-gray-50/50 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  DIRECT X (TWITTER)
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-sm text-black tracking-wider">
                    @Mainhushreeyans
                  </span>
                  <button
                    onClick={handleCopyHandle}
                    className="p-1.5 hover:bg-black hover:text-white rounded transition-colors text-black"
                    title="Copy handle"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <a
                href="https://x.com/Mainhushreeyans"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-3 px-4 flex items-center justify-center gap-2 text-xs font-jakarta font-medium uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                <XIcon className="w-4 h-4" />
                <span>OPEN X PROFILE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="pt-8 mt-auto border-t border-gray-100">
          <p
            className="text-center font-jakarta uppercase tracking-widest text-gray-400"
            style={{ fontSize: 'var(--micro)' }}
          >
            © 2026 SHREEYANS RAJ — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

