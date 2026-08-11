import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  CornerBracketTL,
  CornerBracketTR,
  CornerBracketBL,
  CornerBracketBR,
  CheckerboardSvg,
  WireframeGlobeSvg,
} from './CustomSvgs';

interface MainHeroProps {
  onScrollToAbout: () => void;
  onScrollToWork: () => void;
}

export const MainHero: React.FC<MainHeroProps> = ({ onScrollToAbout, onScrollToWork }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between relative z-10 pt-20 pb-6 md:pb-10">
      {/* Main Hero Viewport Layout */}
      <section
        className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-6 md:gap-8 my-auto"
        style={{
          paddingInline: 'var(--pad-x)',
        }}
      >
        {/* Left Block: Headline & Tagline & CTA */}
        <div className="flex flex-col items-start space-y-6 max-w-4xl">
          {/* Top-Left Bracket */}
          <CornerBracketTL
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            className="text-black"
          />

          {/* Headline */}
          <h1
            className="font-orbitron font-extrabold uppercase text-black tracking-[0.08em] leading-[1.05]"
            style={{ fontSize: 'var(--headline)' }}
          >
            <div>SHREEYANS</div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span>RAJ</span>
              <CheckerboardSvg
                style={{
                  width: 'var(--checker-w)',
                  height: 'var(--checker-h)',
                }}
                className="inline-block text-black translate-y-[2px]"
              />
            </div>
          </h1>

          {/* Tagline Statement */}
          <div className="space-y-1 font-jakarta" style={{ fontSize: 'var(--body)' }}>
            <p className="font-semibold text-black uppercase tracking-[0.15em]">
              A personal digital archive.
            </p>
            <p className="text-gray-500 uppercase tracking-[0.12em]">
              Crafted with intent. Defined by precision.
            </p>
          </div>

          {/* Bottom-Left Bracket */}
          <CornerBracketBL
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            className="text-black"
          />

          {/* CTA Slide Down Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onScrollToAbout}
              className="group border border-black bg-black text-white rounded-md uppercase font-jakarta font-medium tracking-[0.18em] flex items-center hover:bg-gray-900 transition-all cursor-pointer shadow-sm"
              style={{
                fontSize: 'var(--body)',
                paddingInline: 'var(--btn-px)',
                paddingBlock: 'var(--btn-py)',
                gap: 'var(--btn-gap)',
              }}
            >
              <span>DISCOVER ARCHIVE</span>
              <ArrowUpRight
                className="group-hover:translate-y-0.5 transition-transform rotate-90"
                style={{ width: 'var(--icon)', height: 'var(--icon)' }}
              />
            </button>

            <button
              onClick={onScrollToWork}
              className="group border border-gray-300 rounded-md uppercase font-jakarta font-medium tracking-[0.18em] flex items-center hover:bg-black hover:text-white hover:border-black transition-all text-gray-800 bg-transparent cursor-pointer"
              style={{
                fontSize: 'var(--body)',
                paddingInline: 'var(--btn-px)',
                paddingBlock: 'var(--btn-py)',
                gap: 'var(--btn-gap)',
              }}
            >
              <span>SELECTED WORK</span>
            </button>
          </div>
        </div>

        {/* Right Lower Feature Block */}
        <div className="lg:self-end mt-8 lg:mt-0">
          <div
            className="relative bg-transparent flex flex-col justify-between space-y-4"
            style={{
              minWidth: 'var(--feature-min)',
              padding: 'var(--feature-pad)',
            }}
          >
            {/* Absolute Corner Brackets */}
            <CornerBracketTL
              className="absolute top-0 left-0 text-black"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerBracketTR
              className="absolute top-0 right-0 text-black"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerBracketBL
              className="absolute bottom-0 left-0 text-black"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerBracketBR
              className="absolute bottom-0 right-0 text-black"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />

            {/* Wireframe Globe */}
            <WireframeGlobeSvg
              className="text-black"
              style={{ width: 'var(--globe)', height: 'var(--globe)' }}
            />

            {/* Tagline & Touch Indicator */}
            <div
              className="font-jakarta font-semibold uppercase text-black tracking-[0.18em] leading-tight space-y-1.5"
              style={{ fontSize: 'var(--body)' }}
            >
              <div>ARCHIVE / 001</div>
              <div>INDIA</div>
              <div className="text-gray-400 font-mono text-[10px] tracking-widest pt-1">
                EST. 2026
              </div>
              <div className="text-[10px] font-mono text-gray-400 normal-case tracking-normal pt-2 border-t border-gray-100">
                Touch or move cursor to reveal spotlight
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

