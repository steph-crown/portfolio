import { FC } from "react";
import { IProjectProps } from "./interface";
import { ProjectContainer } from "./style";

export const Project: FC<IProjectProps> = ({ name, image, description }) => {
    return <ProjectContainer>{name}</ProjectContainer>;
};
