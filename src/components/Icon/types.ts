import { SVGProps } from "react";

export type IconName =
  | "CheckMark"
  | "ArrowBack"
  | "ArrowForward"
  | "CloseIcon"
  | "MagnifyingGlass"
  | "ArrowDown"
  | "Wishlist"
  | "ShoppingCart";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}
