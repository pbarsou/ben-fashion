import { HeaderContainer } from "./style";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Logo } from "../Logo";

export function Header() {
  return (
    <HeaderContainer>
      <FiMenu size={25}/>
      <Logo />
      <div className="right-itens">
        <FiSearch size={25}/>
        <FiShoppingBag size={25}/>
      </div>
    </HeaderContainer>
  );
};