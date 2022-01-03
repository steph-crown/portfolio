import { FC } from "react";
import { IExperienceProps } from "./interface";
import { ExperienceContainer } from "./style";

export const Experience: FC<IExperienceProps> = ({
    date,
    name,
    description,
}) => {
    return (
        <ExperienceContainer>
            <small data-aos="fade-up">{date}</small>
            <h2 data-aos="fade-up">{name}</h2>
            <p data-aos="fade-up">{description}</p>
        </ExperienceContainer>
    );
};
