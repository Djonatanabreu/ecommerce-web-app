import { SVGProps } from "react";
export const MagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' {...props}>
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='m20 20-3.778-3.784m2.094-5.058a7.158 7.158 0 1 1-14.316 0 7.158 7.158 0 0 1 14.316 0v0Z'
    />
  </svg>
);
