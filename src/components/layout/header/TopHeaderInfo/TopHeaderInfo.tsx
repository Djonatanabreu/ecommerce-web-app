import { DropDown } from "@/components/DropDown/DropDown";
import { Pattern } from "@/components/Patterns/patterns";

export default function TopHeaderInfo() {
  return (
    <Pattern.TopHeaderInfoContainer>
      <Pattern.TopHeaderInfoContentBox>
        <Pattern.Text>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Pattern.Text>
        <Pattern.LinkText href=''>ShopNow</Pattern.LinkText>
      </Pattern.TopHeaderInfoContentBox>
      <DropDown>English</DropDown>
    </Pattern.TopHeaderInfoContainer>
  );
}
