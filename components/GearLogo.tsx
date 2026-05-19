interface GearLogoProps {
  size?: number;
}

// 6-tooth gear: inner radius 22, outer radius 40, center (50,50)
// tooth half-angles: 18° at root, 14° at tip — thick mechanical teeth
// arcs between teeth follow the inner circle at r=22
const GEAR_PATH = [
  "M 43.20,29.08",
  "L 40.33,11.19 L 59.68,11.19 L 56.80,29.08",
  "A 22 22 0 0 1 64.72,33.65",
  "L 78.76,22.22 L 88.46,38.97 L 71.51,45.43",
  "A 22 22 0 0 1 71.51,54.57",
  "L 88.46,61.03 L 78.76,77.78 L 64.72,66.35",
  "A 22 22 0 0 1 56.80,70.92",
  "L 59.68,88.81 L 40.33,88.81 L 43.20,70.92",
  "A 22 22 0 0 1 35.28,66.35",
  "L 21.24,77.78 L 11.54,61.03 L 28.49,54.57",
  "A 22 22 0 0 1 28.49,45.43",
  "L 11.54,38.97 L 21.24,22.22 L 35.28,33.65",
  "A 22 22 0 0 1 43.20,29.08 Z",
].join(" ");

export default function GearLogo({ size = 48 }: GearLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="ItsSolved.ai logo">
      {/* Outer dashed ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="#00C49A"
        strokeWidth="2"
        strokeDasharray="4,3.5"
        strokeLinecap="round"
      />

      {/* 6-tooth gear body */}
      <path d={GEAR_PATH} fill="#00C49A" />

      {/* White center circle — larger */}
      <circle cx="50" cy="50" r="20" fill="white" />

      {/* Checkmark — dark teal, fills the circle */}
      <polyline
        points="40,53 47,60 64,41"
        stroke="#156064"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
