import { Pattern } from "@/components/Patterns/patterns";
import { HeaderNavIconBox, NavMenuStyled } from "./styles";

import { useState, useEffect, EventHandler } from "react";
import { HamburgerButton } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";
import { Icon } from "@/components/Icon/Icon";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <HamburgerButton onClick={toggleMenu}>XMenu</HamburgerButton>
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
        <Icon name='Wishlist' />
        <Icon name='ShoppingCart' />
      </HeaderNavIconBox>
    </NavMenuStyled.Container>
  );
};
