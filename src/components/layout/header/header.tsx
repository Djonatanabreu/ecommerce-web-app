"use client";

import { DropDown } from "@/components/dropdown/DropDown";
import { Container, Pattern } from "@/components/patterns/patterns";

export default function Header() {
  return (
    <Pattern.Header>
      <Pattern.HeaderContainer>
        <Pattern.Text>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Pattern.Text>
        <Pattern.LinkText href=''>ShopNow</Pattern.LinkText>
      </Pattern.HeaderContainer>
      <DropDown>English</DropDown>
    </Pattern.Header>
  );
}
