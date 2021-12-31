export interface IProjectProps {
    name: string;
    description: string;
    image: any;
    stacks?: string[];
    horizontal: boolean;
}

export interface IStackProps {
    name: string;
}

export interface IProjectStyles {
    horizontal: boolean;
}
