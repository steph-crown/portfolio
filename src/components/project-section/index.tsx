import { FC } from "react";
import { ProjectSectionContainer } from "./style";
import cv from "./../../assets/cv.png";
import hifast from "./../../assets/hifast.png";
import newfolio from "./../../assets/new-folio.png";
import oldFolio from "./../../assets/old-folio.png";
import quiz from "./../../assets/quiz.png";
import velocity from "./../../assets/velocity.png";
import google from "./../../assets/google.png";

import { Project } from "../project";
import { IProjectProps } from "../project/interface";

export const ProjectSection: FC = () => {
    const projects: IProjectProps[] = [
        {
            name: "Hifast landing Page",
            image: hifast,
            description:
                "This is the landing page for a mobile application that allows you to deposit and withdraw cash and crypto assets with Hifast, explore a world of boundless opportunities and get unlimited access to a better financial experience",
            stacks: ["REACT JS", "CSS"],
            horizontal: true,
            link: "https://hi-fast.netlify.app/",
        },

        {
            name: "Velocity - Games",
            image: velocity,
            stacks: ["HTML", "CSS", "JAVASCRIPT"],
            horizontal: false,
            description:
                "Information Website for a physical games and sports company where you book games of different types for yourself and your team, ranging from outdoor games like basketball, paintball to indoor and board games like Checkers, chess, monopoly and scrabble.",
            link: "https://247-velocity.netlify.app/",
        },
        {
            name: "Former Portfolio",
            image: oldFolio,
            stacks: ["REACT JS", "CSS", "AOS"],
            horizontal: false,
            description:
                "This is my immediate former portfolio - well, my first one. And it is worthy of a feature because I actually developed it with my phone when I had not gotten a laptop. It was my best work then and I was, and still am very proud of it",
            link: "https://steph-portfolio.vercel.app/",
        },
        {
            name: "Current Portfolio",
            image: newfolio,
            stacks: ["REACT JS", "CSS", "AOS", "GSAP"],
            horizontal: true,
            description:
                "This is what you are currently viewing 😊. I thought I needed to develop a new portfolio, designing it from scratch before coding it out. Made sure it is all-device-responsive, and added some cool transitions with CSS",
            link: "https://www.stephcrown.com/",
        },
        {
            name: "CV in HTML",
            image: cv,
            stacks: ["HTML", "CSS"],
            horizontal: false,
            description:
                "This was a CSS challenge I hopped on, where I developed and styled a resume in the browser. The challenging part was making it responsive, while maintaining the actual structure the resume had on paper.",
            link: "https://steph-crown-cv.netlify.app/",
        },
        {
            name: "Quiz App",
            image: quiz,
            stacks: ["REACT TS", "TYPESCRIPT", "CSS"],
            horizontal: false,
            description:
                "This was my first typescript app. I had to quickly learn typescript when I got a gig that required me to use typescript, so I quickly jumped on a course and got this up within a day. And also completed the gig with typescript and react",
            link: "https://quiz-app-typescript-steel.vercel.app/",
        },
        {
            name: "Google Clone",
            image: google,
            stacks: ["HTML", "CSS"],
            horizontal: true,
            description:
                "This was one of my first CSS project, where I cloned the homepage of Google search. It was a nice experience having to clone the page. I learnt a number of CSS properties while working on it",
            link: "https://quiz-app-typescript-steel.vercel.app/",
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
