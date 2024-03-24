import { Pattern } from "@/components/Patterns/patterns";
import {
  HeaderNavIconBox,
  IconBox,
  NavMenuStyled,
  ShoppingCartIcon,
  WishlistIcon,
} from "./styles";

import { useState, useEffect } from "react";
import { SearchInput } from "../SearchInput/SearchInput";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlistColor, setWishlistColor] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!event.target.closest(".NavigationMenu")) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Cleanup function to remove event listener on unmount
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]); // Only run when isOpen changes

  const navMenuOptions = ["Home", "Contact", "About", "Sign Up"];
  return (
    <NavMenuStyled.Container>
      <Pattern.Heading>Exclusive</Pattern.Heading>
      <NavMenuStyled.ListOptions className={isOpen ? "show" : ""}>
        {navMenuOptions.map((option) => (
          <NavMenuStyled.Option key={option}>
            <NavMenuStyled.ButtonText href={``}>
              {option}
            </NavMenuStyled.ButtonText>
          </NavMenuStyled.Option>
        ))}
      </NavMenuStyled.ListOptions>

      <HeaderNavIconBox>
        <SearchInput />

        <IconBox>
          <WishlistIcon
            onClick={() => {
              setWishlistColor(!wishlistColor);
            }}
            fill={wishlistColor ? "#ff0000" : "none"}
            name='Wishlist'
            stroke={wishlistColor ? "#ff0000" : "#000"}
          />
          <ShoppingCartIcon onClick={() => {}} name='ShoppingCart' />
        </IconBox>
      </HeaderNavIconBox>
    </NavMenuStyled.Container>
  );
};
