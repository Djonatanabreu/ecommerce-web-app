"use cliente";

import {
  BtnLink,
  DrawerBtnLinkList,
  DrawerBurguerIcon,
  DrawerContainer,
  DrawerContent,
} from "./styles";
import { Pattern } from "../Patterns/patterns";
import { useState } from "react";

export const Drawer = () => {
  const [isShowingDrawer, setIsShowingDrawer] = useState<boolean>(true);

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
    <DrawerContainer
      paddingLeft={isShowingDrawer ? "10vw" : "0"}
      width={isShowingDrawer ? "30vw" : "15vw"}
    >
      {isShowingDrawer && (
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
      )}
      <DrawerBurguerIcon
        name='Burguer'
        onClick={() => setIsShowingDrawer(!isShowingDrawer)}
      />
      <Pattern.VerticalLine />
    </DrawerContainer>
  );
};
