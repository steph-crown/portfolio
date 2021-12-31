import styled from "styled-components";

export const ExperienceContainer = styled.div`
    color: white;
    margin: 90px 0;
    max-width: 800px;
    &:first-child {
        margin-top: 24px;
    }
    small {
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.08em;
        color: var(--shade-1);
    }

    h2 {
        font-family: Oswald;
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 74px;
        /* identical to box height */

        letter-spacing: 0.08em;
    }

    p {
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.08em;

        color: #d1d1d1;
        margin-top: 1.5em;
    }

    @media (max-width: 480px) {
        margin: 72px 0;
        small {
            font-size: 0.75em;
        }
        h2 {
            font-size: 2em;
            line-height: 160%;
        }
        p {
            font-size: 1em;
            margin-top: 1.25em;
        }
    }
`;
