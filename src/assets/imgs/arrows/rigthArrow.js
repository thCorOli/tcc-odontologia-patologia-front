import React from "react";

function RightArrow() {
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
          d="M13.64 8.792l-7.543 6.88a1.313 1.313 0 01-1.737 0 1.052 1.052 0 010-1.585L11.034 8 4.36 1.913a1.052 1.052 0 010-1.585 1.314 1.314 0 011.737 0l7.543 6.88c.24.219.36.505.36.792 0 .287-.12.573-.36.792"
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

export default RightArrow;
