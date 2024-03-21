"use client";

import { Pattern } from "@/components/Patterns/patterns";
import TopHeaderInfo from "./TopHeaderInfo/TopHeaderInfo";
import { NavigationMenu } from "./NavMenu/navMenu";

export const Header = () => {
  return (
    <Pattern.HeaderContainer>
      <TopHeaderInfo />
      <NavigationMenu />
      <Pattern.HorizontalLine />
    </Pattern.HeaderContainer>
  );
};
