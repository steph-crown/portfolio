import { FC } from "react";
import { HamburgerContainer } from "./style";

export const Hamburger: FC = () => {
    return (
        <HamburgerContainer>
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
        </HamburgerContainer>
    );
};
