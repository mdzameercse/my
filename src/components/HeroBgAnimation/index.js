import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* MAIN PATH GROUP */}
      <g opacity="0.15">
        <path
          id="path_0"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
        />
        <path
          id="path_1"
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
        />
        <path
          id="path_2"
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
        />
      </g>

      {/* Your ellipses and paths with animations are here - unchanged */}

      {/* DEFINITIONS */}
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(300 300) rotate(90) scale(300)">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#945DD6" />
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(300 300) rotate(90) scale(300)">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#945DD6" />
        </radialGradient>
        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(300 300) rotate(90) scale(300)">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#13ADC7" />
        </radialGradient>
        <linearGradient id="paint3_linear" x1="268" y1="219" x2="295" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#945DD6" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="450" y1="337" x2="476" y2="363" gradientUnits="userSpaceOnUse">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#945DD6" />
        </linearGradient>
        <linearGradient id="paint5_linear" x1="356" y1="128" x2="382" y2="154" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#13ADC7" />
        </linearGradient>
        <linearGradient id="paint6_linear" x1="359" y1="356" x2="333" y2="382" gradientUnits="userSpaceOnUse">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#945DD6" />
        </linearGradient>
        <linearGradient id="paint7_linear" x1="139" y1="120" x2="165" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#13ADC7" />
        </linearGradient>
        <linearGradient id="paint11_linear" x1="450" y1="337" x2="476" y2="363" gradientUnits="userSpaceOnUse">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#F46737" />
        </linearGradient>
      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;
