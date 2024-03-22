import { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox='0 0 35 35' fill='none' {...props}>
    <path
      stroke='#737373'
      strokeWidth={6}
      d='m2.415 2 30.67 31.5M33.5 2.414 2 33.086'
    />
  </svg>
);
