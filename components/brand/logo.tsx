type BrandLogoProps = {
  className?: string
  size?: number
}

export default function BrandLogo({ className, size = 40 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Choudhary Interiors"
    >
      <defs>
        <linearGradient id="ciGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6b5c" />
          <stop offset="100%" stopColor="#1fb9b3" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#ciGradient)" />
      <path
        d="M12 18 L24 10 L36 18"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#ffffff"
      >
        C
      </text>
    </svg>
  )
}
