import { FC } from "react";
import { Link } from "react-router-dom";
import { IHeaderProps } from "./interface";
import { HeaderContainer } from "./style";

export const Header: FC<IHeaderProps> = ({ curr }) => {
    return (
        <HeaderContainer>
            <Link className="logo" to="/">
                <h6 className="w">S</h6>
                <h6 className="w">T</h6>
                <h6 className="w">E</h6>
                <h6 className="w">P</h6>
                <h6 className="w">H</h6>

                <h6 className="space-left y">C</h6>
                <h6 className="y">R</h6>
                <h6 className="y">O</h6>
                <h6 className="y">W</h6>
                <h6 className="y">N</h6>
            </Link>
        </HeaderContainer>
    );
};
