import { FC } from "react";
import { ProjectSectionContainer } from "./style";
import cv from "./../../assets/cv.png";
import hifast from "./../../assets/hifast.png";
import newfolio from "./../../assets/new-folio.png";
import oldFolio from "./../../assets/old-folio.png";
import quiz from "./../../assets/quiz.png";
import velocity from "./../../assets/velocity.png";
import { Project } from "../project";

export const ProjectSection: FC = () => {
    const projects = [
        {
            name: "Hifast landing Page",
            image: hifast,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: true,
        },

        {
            name: "Studics Learning App",
            image: velocity,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            name: "Studics Learning App",
            image: oldFolio,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            name: "Studics Learning App",
            image: newfolio,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: true,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            name: "Studics Learning App",
            image: cv,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            name: "Studics Learning App",
            image: quiz,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
    ];
    return (
        <ProjectSectionContainer>
            <h6 data-aos="fade-right">SELECTED PROJECTS</h6>
            <h1 data-aos="fade-right">Projects</h1>
            <div className="projects-container">
                {projects.map((proj, index) => (
                    <Project key={proj.name + index} {...proj} />
                ))}
            </div>
        </ProjectSectionContainer>
    );
};
