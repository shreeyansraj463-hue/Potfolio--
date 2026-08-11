import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, ArrowUpRight, X, Sparkles, Layers, Cpu, Layout } from 'lucide-react';
import {
  CornerBracketTL,
  CornerBracketTR,
  CornerBracketBL,
  CornerBracketBR,
} from './CustomSvgs';
import { WorkStudy } from '../types';

const XIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface ArchiveSectionsProps {
  onShowToast: (msg: string) => void;
}

const workStudies: WorkStudy[] = [
  {
    id: '01',
    tag: 'INTERFACE STUDY',
    title: 'FORM & COMPOSITION',
    description: 'Interface studies exploring form and composition through pure white grid layouts, restrained typography, and spatial balance.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    role: 'Lead Designer & Developer',
    year: '2026',
    details: 'An architectural exploration in digital minimalism. Built around an ultra-clean modular grid system, subtle hairline borders, and responsive spatial typography. Focuses on optical alignment and negative space.',
    link: 'https://x.com/Mainhushreeyans'
  },
  {
    id: '02',
    tag: 'CODE EXPERIMENT',
    title: 'LOGIC & STRUCTURE',
    description: 'Code experiments shaped by logic and structure, featuring real-time spotlight canvas masks and smooth reactive interactions.',
    stack: ['Canvas API', 'TypeScript', 'Reactive State', 'WebGL'],
    role: 'Creative Engineer',
    year: '2026',
    details: 'Experimental interaction model utilizing a dynamic spotlight image reveal engine. Mouse vectors map directly to canvas clip-paths in real time, delivering a tactile spatial feel without performance frame drops.',
    link: 'https://x.com/Mainhushreeyans'
  },
  {
    id: '03',
    tag: 'EVOLVING SYSTEM',
    title: 'CURIOSITY & INTENT',
    description: 'Evolving systems driven by curiosity and intent, bridging functional clarity with precise digital craftsmanship.',
    stack: ['System Architecture', 'Design Tokens', 'Tailwind CSS', 'UI Engineering'],
    role: 'Software Architect',
    year: '2026',
    details: 'A holistic digital archive blueprint combining component modularity, dark-to-light theme coherence, and high-precision typography scales for future-proof scalability.',
    link: 'https://x.com/Mainhushreeyans'
  },
];

const capabilities = [
  {
    icon: Layout,
    code: '[01]',
    title: 'FRONTEND ARCHITECTURE',
    desc: 'React 18, TypeScript, Vite, Performance Tuning & Modular Component Systems.',
  },
  {
    icon: Sparkles,
    code: '[02]',
    title: 'INTERACTIVE MOTION',
    desc: 'Framer Motion, Canvas SVG Masking, Kinetic Micro-Interactions & Transitions.',
  },
  {
    icon: Cpu,
    code: '[03]',
    title: 'UI & DESIGN SYSTEMS',
    desc: 'Spatial Grid Alignment, Typographic Hierarchy, Structural Precision & Contrast.',
  },
];

export const ArchiveSections: React.FC<ArchiveSectionsProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkStudy | null>(null);

  const handleCopyHandle = () => {
    navigator.clipboard.writeText('@Mainhushreeyans');
    setCopied(true);
    onShowToast('Copied @Mainhushreeyans to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 w-full bg-white">
      {/* SECTION 2: / ABOUT */}
      <section
        id="about"
        className="w-full min-h-screen pt-20 pb-16 flex flex-col justify-center items-center snap-start relative bg-white overflow-hidden"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto border border-gray-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 md:p-12 relative shadow-sm"
        >
          {/* Corner Brackets */}
          <CornerBracketTL className="absolute top-0 left-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketTR className="absolute top-0 right-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketBL className="absolute bottom-0 left-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketBR className="absolute bottom-0 right-0 text-black w-3 h-3 sm:w-4 sm:h-4" />

          {/* Section Heading */}
          <div className="flex items-center justify-between border-b border-gray-200/70 pb-4 mb-8">
            <h2 className="font-orbitron font-bold text-lg sm:text-2xl text-black tracking-widest uppercase">
              / ABOUT
            </h2>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
              SHREEYANS RAJ
            </span>
          </div>

          {/* Statement Lines */}
          <div className="space-y-6 font-jakarta text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium text-black text-base sm:text-lg md:text-xl leading-snug"
            >
              Hi, I’m <span className="font-bold underline decoration-2 decoration-black">Shreeyans</span> — a student, creative developer, and tech enthusiast who loves building intentional digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-600 font-normal"
            >
              My academic foundation was built at <span className="text-black font-semibold">Bijendra Public School</span> (4th to 10th grade), and I am currently navigating my <span className="text-black font-semibold">12th Grade</span> while exploring the frontiers of code, digital art, and gaming.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-600 font-normal"
            >
              I am driven by a relentless curiosity about how programs and complex machines work under the hood. I love taking ideas, breaking down their internal logic, and turning them into smooth, interactive software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-600 font-normal"
            >
              Above all, I believe in kindness, empathy, and making a positive impact. My goal is to build technology that is not only mathematically precise, but also brings joy and value to everyone who uses it.
            </motion.p>

            {/* Capabilities Matrix Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-gray-100"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mb-4">
                // CAPABILITIES & SPECIALIZATIONS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {capabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.code}
                      className="p-4 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300 transition-all rounded-sm space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-black">{item.code}</span>
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="font-orbitron font-bold text-xs uppercase text-black tracking-wider">
                        {item.title}
                      </h4>
                      <p className="font-jakarta text-xs text-gray-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
            >
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-black font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                Quietly building.
              </p>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-400">
                Constantly refining.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: / SELECTED WORK */}
      <section
        id="work"
        className="w-full min-h-screen pt-20 pb-16 flex flex-col justify-center items-center snap-start relative bg-white overflow-hidden"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <div className="w-full max-w-5xl mx-auto space-y-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-4 gap-2"
          >
            <div>
              <h2 className="font-orbitron font-bold text-lg sm:text-2xl text-black tracking-widest uppercase">
                / SELECTED WORK
              </h2>
              <p className="font-jakarta text-xs sm:text-sm text-gray-500 uppercase tracking-widest mt-1">
                EXPLORATIONS IN FORM & STRUCTURE
              </p>
            </div>
            <span className="font-mono text-xs text-gray-400">
              03 STUDIES • CLICK FOR CASE STUDY
            </span>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workStudies.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedWork(work)}
                className="group relative bg-white/90 backdrop-blur-md border border-gray-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-black transition-all hover:shadow-xl cursor-pointer"
              >
                {/* Corner Brackets */}
                <CornerBracketTL className="absolute top-0 left-0 text-black w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <CornerBracketTR className="absolute top-0 right-0 text-black w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <CornerBracketBL className="absolute bottom-0 left-0 text-black w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <CornerBracketBR className="absolute bottom-0 right-0 text-black w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                      {work.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-black border border-gray-200 px-2 py-0.5 group-hover:bg-black group-hover:text-white transition-colors">
                      {work.id}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-sm sm:text-base text-black uppercase tracking-wider group-hover:text-gray-800">
                    {work.title}
                  </h3>

                  <p className="font-jakarta text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {work.stack?.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded-none"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-black font-semibold tracking-wider group-hover:underline">
                    VIEW CASE STUDY
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: / CONTACT */}
      <section
        id="contact"
        className="w-full min-h-screen pt-20 pb-16 flex flex-col justify-center items-center snap-start relative bg-white overflow-hidden"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto border border-gray-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 md:p-12 relative shadow-sm"
        >
          {/* Corner Brackets */}
          <CornerBracketTL className="absolute top-0 left-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketTR className="absolute top-0 right-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketBL className="absolute bottom-0 left-0 text-black w-3 h-3 sm:w-4 sm:h-4" />
          <CornerBracketBR className="absolute bottom-0 right-0 text-black w-3 h-3 sm:w-4 sm:h-4" />

          {/* Section Heading */}
          <div className="flex items-center justify-between border-b border-gray-200/70 pb-4 mb-8">
            <h2 className="font-orbitron font-bold text-lg sm:text-2xl text-black tracking-widest uppercase">
              / CONTACT
            </h2>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
              GET IN TOUCH
            </span>
          </div>

          <div className="space-y-6 max-w-2xl">
            <p className="font-jakarta text-sm sm:text-base text-gray-800 leading-relaxed">
              For select conversations and thoughtful ideas.
            </p>

            <div className="p-4 sm:p-6 border border-gray-200 bg-white/90 space-y-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  X (TWITTER)
                </span>
                <p className="font-mono font-bold text-base sm:text-lg text-black tracking-wider">
                  @Mainhushreeyans
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyHandle}
                  className="px-3.5 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors text-xs font-jakarta uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY HANDLE</span>
                    </>
                  )}
                </button>

                <a
                  href="https://x.com/Mainhushreeyans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white hover:bg-gray-900 transition-colors text-xs font-jakarta uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  <span>OPEN X</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-black/20 w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl space-y-6"
            >
              {/* Corner Brackets */}
              <CornerBracketTL className="absolute top-0 left-0 text-black w-4 h-4" />
              <CornerBracketTR className="absolute top-0 right-0 text-black w-4 h-4" />
              <CornerBracketBL className="absolute bottom-0 left-0 text-black w-4 h-4" />
              <CornerBracketBR className="absolute bottom-0 right-0 text-black w-4 h-4" />

              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-gray-200 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                      STUDY {selectedWork.id}
                    </span>
                    <span className="text-[10px] font-mono text-black font-bold border border-black/20 px-1.5 py-0.5">
                      {selectedWork.tag}
                    </span>
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-black uppercase tracking-wider">
                    {selectedWork.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedWork(null)}
                  className="p-1.5 hover:bg-gray-100 transition-colors text-black cursor-pointer border border-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Details Content */}
              <div className="space-y-4">
                <p className="font-jakarta text-sm text-gray-700 leading-relaxed">
                  {selectedWork.details || selectedWork.description}
                </p>

                {/* Specs Meta */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-100 bg-gray-50/50 p-4 font-mono text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">ROLE</span>
                    <span className="text-black font-semibold">{selectedWork.role || 'Independent Developer'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">YEAR</span>
                    <span className="text-black font-semibold">{selectedWork.year || '2026'}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase block">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedWork.stack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-black text-white px-2.5 py-1 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="text-xs font-mono uppercase text-gray-500 hover:text-black cursor-pointer"
                >
                  [ CLOSE SPEC ]
                </button>

                <a
                  href={selectedWork.link || 'https://x.com/Mainhushreeyans'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 text-xs font-jakarta font-medium uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  <span>CONNECT ON X</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="w-full relative z-20 pt-16 pb-8 bg-gradient-to-t from-white via-white/90 to-transparent">
        <div
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-gray-200/80 pt-6 gap-4"
          style={{ paddingInline: 'var(--pad-x)' }}
        >
          <div className="flex items-center gap-3 font-orbitron font-bold text-xs uppercase tracking-wider text-black">
            <span>SHREEYANS RAJ</span>
            <span className="text-gray-300">|</span>
            <span className="font-mono text-[10px] font-normal text-gray-500">DIGITAL ARCHIVE</span>
          </div>

          <p className="font-jakarta text-xs text-gray-400 tracking-wider uppercase text-center sm:text-right">
            © 2026 SHREEYANS RAJ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};
