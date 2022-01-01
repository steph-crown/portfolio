import { FC } from "react";
import { IHamburgerProps } from "../header/hamburger/interface";
import { MenuContainer } from "./style";

export const Menu: FC<IHamburgerProps> = ({ menuOpen, setMenuOpen }) => {
    return (
        <MenuContainer>
            {/* <p>nncn</p> */}
            {/* {console.log(menuOpen)} */}
            {/* <p>snsn</p> */}
        </MenuContainer>
    );
};
