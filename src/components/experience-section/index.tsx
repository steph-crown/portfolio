import { FC } from "react";
import { Experience } from "../experience";
import { ExperienceSectionContainer } from "./style";

export const ExperienceSection: FC = () => {
    const experiences = [
        {
            date: "2020, FEBRUARY",
            name: "Started Frontend Development",
            description: "Deployed my first HTML Code to Github.",
        },
        {
            date: "2020, AUGUST",
            name: "Interned at Migrant Solutions",
            description:
                "Worked with UX Designers and backend developers to develop web applications. Learnt React JS",
        },
        {
            date: "2021, FEB",
            name: "Freelance",
            description:
                "Started accepting freelance gigs. I have developed several web applications for clients - mostly with the React framework, occasionally with Vanilla Javascript. Most of these applications consumed simple to complex data from APIs",
        },
        {
            date: "2021, JUNE",
            name: "Solatium Limited",
            description:
                "Along with other frontend developers, I developed the frontend of web applications in the different fields from fintech to health technology",
        },
    ];

    return (
        <ExperienceSectionContainer>
            <h6 data-aos="fade-right">JOURNEY SO FAR ...</h6>
            <h1 data-aos="fade-right">Experience</h1>
            <div className="experience-section">
                <div className="line">
                    <div className="scroll"></div>
                </div>
                <div className="right">
                    {experiences.map((exp) => (
                        <Experience key={exp.name} {...exp} />
                    ))}
                </div>
            </div>
        </ExperienceSectionContainer>
    );
};
