"use cliente";

import { ReactNode } from "react";
import {
  BtnLink,
  DrawerBtnLinkList,
  DrawerContainer,
  DrawerContent,
} from "./styles";
import { Pattern } from "../Patterns/patterns";

export const Drawer = () => {
  const drawerList = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <DrawerContainer>
      <DrawerContent>
        <DrawerBtnLinkList>
          {drawerList.map((item) => {
            return (
              <BtnLink key={Math.random()}>
                <DrawerBtnLinkList>{item}</DrawerBtnLinkList>
              </BtnLink>
            );
          })}
        </DrawerBtnLinkList>
      </DrawerContent>
      <Pattern.VerticalLine />
    </DrawerContainer>
  );
};
