import React from "react";

function LeftArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="none"
      viewBox="0 0 18 24"
    >
      <g filter="url(#filter0_d)">
        <path
          fill="#1E568F"
          d="M4.36 8.792l7.543 6.88c.48.438 1.258.438 1.737 0 .48-.438.48-1.147 0-1.585L6.966 8l6.674-6.087c.48-.438.48-1.147 0-1.585a1.314 1.314 0 00-1.737 0L4.36 7.208C4.12 7.427 4 7.713 4 8c0 .287.12.573.36.792"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="18"
          height="24"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LeftArrow;
