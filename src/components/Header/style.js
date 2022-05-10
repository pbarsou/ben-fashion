import styled from "styled-components";
import { LogoStyle } from "../Logo/style";

const HeaderContainer = styled.header`
  padding: 16px;
  background-color: #E7EAEF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  ${LogoStyle} {
    background-color: black;
  }

  .right-itens {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      &:first-child{
        margin-right: 10px;
      }
    }
  }
`; 
export { HeaderContainer };