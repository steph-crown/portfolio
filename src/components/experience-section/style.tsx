import styled from "styled-components";

export const ExperienceSectionContainer = styled.div`
    padding: 0px var(--side-pad);
    margin-top: 100px;

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

    div.line {
        background-color: var(--shade-1);
        height: 285px;
        width: 1px;
        border-radius: 20px;
        position: relative;
        margin-right: 96px;

        @media (max-width: 800px) {
            margin-right: 64px;
        }
        @media (max-width: 480px) {
            margin-right: 32px;
        }

        div.scroll {
            width: 2px;
            height: 136px;
            top: 0;
            left: 0;
            right: 0;
            background: var(--white);
            border-radius: 20px;
            /* animation-name: scroll;
            animation-duration: 3s;
            animation-iteration-count: infinite; */
        }
    }

    div.experience-section {
        display: flex;
        min-height: 2px;
        /* align-items: center; */
    }
`;
