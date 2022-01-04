import { FC, useState } from "react";
import { AboutBanner } from "../../components/about-banner";
import { Header } from "../../components/header";
import { Menu } from "../../components/menu";
import { AboutPageContainer } from "./style";

export const AboutPage: FC = () => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);

    return (
        <AboutPageContainer>
            <Header curr={[1]} {...{ menuOpen, setMenuOpen }} />
            <AboutBanner />
            <Menu {...{ menuOpen, setMenuOpen }} curr={[1]} />
        </AboutPageContainer>
    );
};
