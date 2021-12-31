import { FC } from "react";
import { Button } from "../buttons";
import { IProjectProps, IStackProps } from "./interface";
import { ProjectContainer, StackContainer } from "./style";

export const Project: FC<IProjectProps> = ({
    name,
    image,
    description,
    stacks,
    horizontal,
}) => {
    return (
        <ProjectContainer horizontal={horizontal}>
            <div className="first">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="stacks">
                    {stacks?.map((stack) => (
                        <Stack key={stack} name={stack} />
                    ))}
                </div>

                <Button>View Live</Button>
            </div>
            <div className="second">
                <img src={image} alt={name} />
            </div>
        </ProjectContainer>
    );
};

export const Stack: FC<IStackProps> = ({ name }) => {
    return (
        <StackContainer>
            <small>{name}</small>
        </StackContainer>
    );
};
