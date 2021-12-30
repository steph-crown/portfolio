import { FC } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "./hamburger";
import { IHeaderProps } from "./interface";
import { HeaderContainer } from "./style";

export const Header: FC<IHeaderProps> = ({ curr }) => {
    const navLinks: { name: string; link: string }[] = [
        { name: "About", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Resume", link: "/" },
        { name: "Contact Me", link: "/" },
    ];
    return (
        <HeaderContainer>
            <div className="flex">
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
                <nav className="flex">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.link}
                            className={curr.includes(index) ? "current" : ""}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <Hamburger />
        </HeaderContainer>
    );
};
