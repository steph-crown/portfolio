import { FC } from "react";
import { IHamburgerProps } from "./interface";
import { HamburgerContainer } from "./style";

export const Hamburger: FC<IHamburgerProps> = ({ menuOpen, setMenuOpen }) => {
    return (
        <HamburgerContainer
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
        </HamburgerContainer>
    );
};
