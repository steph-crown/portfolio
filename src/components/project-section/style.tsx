import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
    padding: 0px var(--side-pad);

    @media (max-width: 480px) {
        padding: 0px var(--mob-side-pad);
    }

    h6 {
        color: var(--white);
        font-size: 1.5em;
        font-weight: 500;

        @media (max-width: 480px) {
            font-size: 1.1em;
        }
    }

    h1 {
        color: rgba(155, 138, 171, 0.3);
        font-size: 9.375em;
        font-family: Oswald;
        margin-top: -40px;
        margin-bottom: 24px;
        @media (max-width: 700px) {
            font-size: 6em;
            margin-top: -24px;
        }
        @media (max-width: 480px) {
            font-size: 4em;
            margin-top: -20px;
        }

        @media (max-width: 290px) {
            font-size: 3em;
            margin-top: -20px;
        }
    }
    div.projects-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
