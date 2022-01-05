import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AboutBanner } from "../../components/about-banner";
import { ExperienceSection } from "../../components/experience-section";
import { Footer } from "../../components/footer";
// import { FunFact } from "../../components/fun-fact";
import { Header } from "../../components/header";
import { Menu } from "../../components/menu";
import { AboutPageContainer } from "./style";

export const AboutPage: FC = () => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const history = useHistory();
    useEffect(() => {
        const hash = history.location.hash;
        // Check if there is a hash and if an element with that id exists
        const el = hash && document.getElementById(hash.substr(1));
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [history.location.hash]); // Fires every time hash changes

    return (
        <AboutPageContainer>
            <Header curr={[1]} {...{ menuOpen, setMenuOpen }} />
            <AboutBanner />
            {/* <FunFact /> */}
            <ExperienceSection />

            <Footer />

            <Menu {...{ menuOpen, setMenuOpen }} curr={[1]} />
        </AboutPageContainer>
    );
};
