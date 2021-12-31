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
            <small>{date}</small>
            <h2>{name}</h2>
            <p>{description}</p>
        </ExperienceContainer>
    );
};
