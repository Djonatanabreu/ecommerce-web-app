import { SVGProps } from "react";
export const Burguer = (props: SVGProps<SVGSVGElement>) => (
  <svg width='32' height='32' fill='none' stroke='#000' {...props}>
    <path
      strokeLinecap='round'
      strokeWidth={2.2}
      d='M2 2h32M2 10h19.333M2 18h24.667M2 26h32'
    />
  </svg>
);
