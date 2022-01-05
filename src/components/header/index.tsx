import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "./hamburger";
import { IHeaderProps } from "./interface";
import { HeaderContainer } from "./style";
export const navLinks: { name: string; link: string }[] = [
    { name: "Projects", link: "/#projects" },
    { name: "About", link: "/about" },

    { name: "Resume", link: "/resume.pdf" },
    { name: "Contact Me", link: "/#footer" },
];
export const Header: FC<IHeaderProps> = ({ curr, menuOpen, setMenuOpen }) => {
    const [reduceNav, setReduceNav] = useState<Boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const scrollY = window.scrollY;
            setReduceNav(scrollY > 10);
        });
    });

    return (
        <HeaderContainer isReduced={reduceNav} menuOpen={menuOpen}>
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
                    {navLinks.map((link, index) =>
                        index !== 2 ? (
                            <Link
                                key={link.name}
                                to={link.link}
                                className={
                                    curr.includes(index) ? "current" : ""
                                }
                            >
                                {link.name}
                                <span></span>
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href="/resume.pdf"
                                className={
                                    curr.includes(index) ? "current" : ""
                                }
                                target={"_blank"}
                            >
                                {link.name}
                                <span></span>
                            </a>
                        )
                    )}
                </nav>
            </div>

            <Hamburger {...{ menuOpen, setMenuOpen }} />
        </HeaderContainer>
    );
};
