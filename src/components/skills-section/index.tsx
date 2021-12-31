import { FC } from "react";
import { ISkillsProps } from "./interface";
import { SkillContainer, SkillsSectionContainer } from "./style";

export const SkillsSection: FC = () => {
    const skills = [
        "HTML 5",
        "CSS 3",
        "J QUERY",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "Responsive Design",
        "FIGMA",
        "REACT JS",
        "PYTHON",
        "NEXT JS",
    ];
    return (
        <SkillsSectionContainer>
            <h6>SKILLS AND LANGUAGES</h6>
            <h1>Skills</h1>
            <div className="skill-section">
                <div className="first">
                    <p>
                        In my 2+ years of frontend development, I've worked on a
                        variety of projects, laying up UI with great attention
                        to details. I've also had the chance to work with the
                        React framework, and I'm always learning new things to
                        better my skills.
                    </p>
                    <p>
                        I currently have a background in user experience design,
                        thus I'm used to building for while maintaining a high
                        level of user experience.{" "}
                    </p>
                    <p>
                        In addition, I am a mobile-first developer. I actively
                        ensure that each component I develop is totally
                        responsive on all devices before moving to the next
                        component.{" "}
                    </p>
                </div>
                <div className="line-through"></div>
                <div className="second">
                    {skills.map((skill) => (
                        <Skill name={skill} key={skill} />
                    ))}
                </div>
            </div>
        </SkillsSectionContainer>
    );
};

const Skill: FC<ISkillsProps> = ({ name }) => {
    return <SkillContainer>{name}</SkillContainer>;
};
