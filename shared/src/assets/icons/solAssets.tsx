import React from "react";

type SVGProps = React.SVGAttributes<SVGElement>;

export const SolanaLogo: React.FC<SVGProps> = (props) => (
  <svg
    width="41"
    height="32"
    viewBox="0 0 41 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style || { padding: 4 }}
    {...props}
  >
    <g clipPath="url(#clip0_2204_947)">
      <path
        d="M6.63201 24.4235C6.8784 24.1771 7.21719 24.0334 7.57651 24.0334H40.1617C40.7571 24.0334 41.0549 24.752 40.6339 25.1729L34.197 31.6099C33.9506 31.8563 33.6118 32 33.2525 32H0.667303C0.0718583 32 -0.225864 31.2814 0.195054 30.8605L6.63201 24.4235Z"
        fill="#14F195"
      />
      <path
        d="M6.63201 0.390119C6.88867 0.143728 7.22746 0 7.57651 0H40.1617C40.7571 0 41.0549 0.71864 40.6339 1.13956L34.197 7.57652C33.9506 7.82291 33.6118 7.96663 33.2525 7.96663H0.667303C0.0718583 7.96663 -0.225864 7.24799 0.195054 6.82708L6.63201 0.390119Z"
        fill="#14F195"
      />
      <path
        d="M34.197 12.3298C33.9506 12.0834 33.6118 11.9397 33.2525 11.9397H0.667303C0.0718583 11.9397 -0.225864 12.6583 0.195054 13.0793L6.63201 19.5162C6.8784 19.7626 7.21719 19.9063 7.57651 19.9063H40.1617C40.7571 19.9063 41.0549 19.1877 40.6339 18.7668L34.197 12.3298Z"
        fill="#14F195"
      />
    </g>
    <defs>
      <clipPath id="clip0_2204_947">
        <rect width="40.829" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);