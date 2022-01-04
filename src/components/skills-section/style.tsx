import styled from "styled-components";

export const SkillsSectionContainer = styled.div`
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

    div.skill-section {
        display: flex;
        justify-content: space-between;
        min-height: 40px;

        div.first {
            width: 45%;

            p {
                font-size: 20px;
                line-height: 174.9%;
                /* or 35px */

                letter-spacing: 0.04em;

                color: #ffffff;
                margin-bottom: 1.5em;
            }
        }
        div.second {
            width: 45%;
            display: flex;
            height: 2px;
            flex-wrap: wrap;
            margin-top: 3em;
        }
        div.line-through {
            /* height: 100%; */
            width: 1px;
            background: #ffffff1f;
            /* height: 100px; */
        }

        @media (max-width: 900px) {
            display: block;

            div.second {
                height: unset;
                min-height: 2px;
                width: 100%;
            }

            div.first {
                width: 100%;
            }

            div.line-through {
                display: none;
            }
        }
    }
`;

export const SkillContainer = styled.div`
    color: white;
    padding: 8px 20px;
    background: #0c0314;
    font-size: 1em;
    margin-bottom: 1.2em;
    margin-right: 1.2em;
    border-left: 2px solid #d6d93b;
    border-radius: 0 5px 5px 0;
    letter-spacing: 0.08em;

    @media (max-width: 480px) {
        font-size: 0.875em;
        margin-bottom: 1em;
        margin-right: 1em;
    }
`;
