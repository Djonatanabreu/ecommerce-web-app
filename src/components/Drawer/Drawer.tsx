"use cliente";

import {
  BtnLink,
  DrawerBtnLink,
  DrawerBtnLinkList,
  DrawerBurguerIcon,
  DrawerContainer,
  DrawerContent,
} from "./styles";
import { Pattern } from "../Patterns/patterns";
import { useEffect, useRef, useState } from "react";

export const Drawer = () => {
  const [isShowingDrawer, setIsShowingDrawer] = useState<boolean>(true);
  const [deviceWidth, setDeviceWidth] = useState<number>(0);
  const [displayMode, setDisplayMode] = useState<string>("none");

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
    if (window.innerWidth <= 868) setDisplayMode("inline");
    console.log(displayMode, deviceWidth);
  }, [displayMode, deviceWidth]);

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
      $paddingLeft={isShowingDrawer ? "10vw" : "0"}
      $width={isShowingDrawer ? "30vw" : "15vw"}
    >
      {isShowingDrawer && (
        <DrawerContent>
          <DrawerBtnLinkList>
            {drawerList.map((item) => {
              return (
                <BtnLink key={Math.random()}>
                  <DrawerBtnLink href={""}>{item}</DrawerBtnLink>
                </BtnLink>
              );
            })}
          </DrawerBtnLinkList>
        </DrawerContent>
      )}

      <DrawerBurguerIcon
        $displayIcon={displayMode}
        name='Burguer'
        onClick={() => setIsShowingDrawer(!isShowingDrawer)}
      />

      <Pattern.VerticalLine />
    </DrawerContainer>
  );
};
