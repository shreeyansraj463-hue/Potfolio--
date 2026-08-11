import React from 'react';

// Corner Brackets
export const CornerBracketTL: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path d="M0 11.5V0.5H11.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CornerBracketTR: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path d="M0.5 0.5H11.5V11.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CornerBracketBL: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path d="M0 0.5V11.5H11.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CornerBracketBR: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path d="M0.5 11.5H11.5V0.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Checkerboard Grid SVG (viewBox 0 0 36 18, 4 rows of 3.8x3.8 black squares, even rows shifted by 2.25)
export const CheckerboardSvg: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => {
  const row0 = [0, 4.5, 9, 13.5, 18, 22.5, 27, 31.5];
  const row1 = [2.25, 6.75, 11.25, 15.75, 20.25, 24.75, 29.25, 33.75];

  return (
    <svg
      viewBox="0 0 36 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Row 0 (y=0) */}
      {row0.map((x, i) => (
        <rect key={`r0-${i}`} x={x} y={0} width={3.8} height={3.8} fill="currentColor" />
      ))}
      {/* Row 1 (y=4.5) */}
      {row1.map((x, i) => (
        <rect key={`r1-${i}`} x={x} y={4.5} width={3.8} height={3.8} fill="currentColor" />
      ))}
      {/* Row 2 (y=9.0) */}
      {row0.map((x, i) => (
        <rect key={`r2-${i}`} x={x} y={9} width={3.8} height={3.8} fill="currentColor" />
      ))}
      {/* Row 3 (y=13.5) */}
      {row1.map((x, i) => (
        <rect key={`r3-${i}`} x={x} y={13.5} width={3.8} height={3.8} fill="currentColor" />
      ))}
    </svg>
  );
};

// Wireframe Globe SVG (viewBox 0 0 64 64, stroke 1.2)
export const WireframeGlobeSvg: React.FC<{ style?: React.CSSProperties; className?: string }> = ({ style, className = '' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Outer circle r=28 */}
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.2" />
    {/* Equator line */}
    <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1.2" />
    {/* Meridian line */}
    <line x1="32" y1="4" x2="32" y2="60" stroke="currentColor" strokeWidth="1.2" />
    {/* Horizontal ellipses */}
    <ellipse cx="32" cy="32" rx="28" ry="14" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="32" cy="32" rx="28" ry="22" stroke="currentColor" strokeWidth="1.2" />
    {/* Vertical ellipses */}
    <ellipse cx="32" cy="32" rx="14" ry="28" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="32" cy="32" rx="22" ry="28" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
