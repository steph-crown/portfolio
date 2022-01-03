import styled from "styled-components";
import { IProjectStyles } from "./interface";

export const ProjectContainer = styled.div<IProjectStyles>`
    background: rgba(24, 2, 47, 1);
    border: 1px solid rgba(150, 140, 127, 0.3);
    border-radius: 16px;
    padding: ${({ horizontal }) =>
        horizontal ? "48px 0 0 48px" : "40px 0 0 32px"};
    color: var(--white);
    display: ${({ horizontal }) => (horizontal ? "flex" : "block")};
    margin: 32px 0;
    justify-content: space-between;
    min-height: 2px;
    align-items: flex-end;
    width: ${({ horizontal }) => (horizontal ? "100%" : "47%")};

    @media (max-width: 900px) {
        width: 100%;
        margin: 24px 0;
    }
    h2 {
        font-weight: 500;
        font-size: 40px;
        line-height: 59px;
        font-family: Oswald;
        letter-spacing: 0.08em;
    }
    div.first > p {
        font-weight: 300;
        font-size: 18px;
        line-height: 219.2%;
        /* or 39px */

        letter-spacing: 0.08em;
        margin-top: 24px;
    }

    div.first {
        padding-right: ${({ horizontal }) => (horizontal ? "48px" : "32px")};
        padding-bottom: ${({ horizontal }) => (horizontal ? "48px" : "56px")};
        width: ${({ horizontal }) => (horizontal ? "50%" : "100%")};
        div.stacks {
            display: flex;
            min-height: 2px;
            align-items: center;
            margin: 8px 0 40px 0;
        }
    }

    div.second {
        width: ${({ horizontal }) => (horizontal ? "50%" : "100%")};

        img {
            width: 100%;
            object-fit: cover;
            height: ${({ horizontal }) => (horizontal ? "400px" : "300px")};
            background-size: cover;
            background-position: 50%;
            object-position: top left;
            display: flex;
        }
    }

    @media (max-width: 900px) {
        padding: 32px 0 0 24px;
        display: block;
        div.first {
            width: 100%;
            padding-bottom: 40px;
            padding-right: 24px;
        }
        div.second {
            width: 100%;
            img {
                height: 240px;
            }
        }
    }
`;

export const StackContainer = styled.div`
    background: rgba(214, 217, 59, 0.2);
    padding: 6px 12px;
    margin-right: 8px;
    border-radius: 5px;

    small {
        font-size: 12px;
    }
`;
