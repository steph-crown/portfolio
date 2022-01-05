import { FC } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../header";
import { IHeaderProps } from "../header/interface";
import { MenuContainer } from "./style";

export const Menu: FC<IHeaderProps> = ({ menuOpen, curr }) => {
    return (
        <MenuContainer {...{ menuOpen }}>
            <div className="menu-bg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {console.log(menuOpen)}
            </div>
            <div className="menu-links">
                {navLinks.map((link, index) =>
                    index !== 2 ? (
                        <Link
                            key={link.name}
                            to={link.link}
                            className={curr.includes(index) ? "current" : ""}
                        >
                            {link.name}
                            <span></span>
                        </Link>
                    ) : (
                        <a
                            key={link.name}
                            href="/resume.pdf"
                            className={curr.includes(index) ? "current" : ""}
                            target={"_blank"}
                        >
                            {link.name}
                            <span></span>
                        </a>
                    )
                )}
            </div>
        </MenuContainer>
    );
};
