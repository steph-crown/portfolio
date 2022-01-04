import { FC, useState } from "react";
import { Banner } from "../../components/banner";
import { ExperienceSection } from "../../components/experience-section";
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

    return (
        <HomeContainer>
            <Header curr={[0]} {...{ menuOpen, setMenuOpen }} />
            <Banner />
            <ProjectSection />
            <ExperienceSection />
            <SkillsSection />
            <Footer />
            <Menu {...{ menuOpen, setMenuOpen }} curr={[0]} />
        </HomeContainer>
    );
};
