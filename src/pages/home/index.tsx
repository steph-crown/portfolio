import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Menu } from "../../components/menu";
import { ProjectSection } from "../../components/project-section";
import { SkillsSection } from "../../components/skills-section";
// import { useHistory } from "react-router-dom";
import { HomeContainer } from "./style";
// import { gsap } from "gsap";
// ease : ["elastic", "back"]

export const HomePage: FC = () => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    // For scroll internal linking

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

    // useEffect(() => {
    // }, []);
    return (
        <HomeContainer>
            <Header curr={[0]} {...{ menuOpen, setMenuOpen }} />
            <Banner />
            <div id="projects">
                <ProjectSection />
            </div>
            <SkillsSection />
            <div id="footer">
                <Footer />
            </div>
            <Menu {...{ menuOpen, setMenuOpen }} curr={[0]} />
        </HomeContainer>
    );
};
