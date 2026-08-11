import React, { useEffect, useRef, useState } from 'react';

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85';

const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85';

export const ImageRevealBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const smoothRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const gridOffsetRef = useRef({ x: 0, y: 0 });

  const [gridOffset, setGridOffset] = useState({ x: 0, y: 0 });
  const [gridCellSize, setGridCellSize] = useState(48);
  const [maskUrl, setMaskUrl] = useState<string>('');

  useEffect(() => {
    // Window mouse & touch tracking
    const updatePosition = (clientX: number, clientY: number) => {
      mouseRef.current = { x: clientX, y: clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleResize = () => {
      const cell = Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)));
      setGridCellSize(cell);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Ease smoothRef toward mouseRef with factor 0.1
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

      // 2. Parallax grid offset computation
      const cx = smoothRef.current.x / (width || 1) - 0.5;
      const cy = smoothRef.current.y / (height || 1) - 0.5;

      gridOffsetRef.current.x += (cx * 16 - gridOffsetRef.current.x) * 0.06;
      gridOffsetRef.current.y += (cy * 16 - gridOffsetRef.current.y) * 0.06;

      setGridOffset({ x: gridOffsetRef.current.x, y: gridOffsetRef.current.y });

      // 3. Spotlight / mask canvas rendering
      const canvas = canvasRef.current;
      if (canvas) {
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          // Fluid radius: min 140px on mobile, scaled smoothly on desktop
          const radius = Math.round(Math.min(420, Math.max(140, width * 0.18)));
          const curX = smoothRef.current.x;
          const curY = smoothRef.current.y;

          const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, radius);
          grad.addColorStop(0, 'rgba(255,255,255,1)');
          grad.addColorStop(0.4, 'rgba(255,255,255,1)');
          grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
          grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
          grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
          grad.addColorStop(1, 'rgba(255,255,255,0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(curX, curY, radius, 0, Math.PI * 2);
          ctx.fill();

          setMaskUrl(canvas.toDataURL('image/png'));
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="block fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Offscreen Canvas for Spotlight Mask Generation */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Layer 1: Base Background Image (BG_IMAGE_1) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
        }}
      />

      {/* Layer 2: Reveal Image (BG_IMAGE_2) with Spotlight Mask */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          maskImage: maskUrl ? `url(${maskUrl})` : 'none',
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : 'none',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />

      {/* Layer 3: Subtle SVG Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width={gridCellSize}
            height={gridCellSize}
            patternUnits="userSpaceOnUse"
            x={gridOffset.x}
            y={gridOffset.y}
          >
            <path
              d={`M ${gridCellSize} 0 L 0 0 0 ${gridCellSize}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
