import styled from "styled-components";

export const FunFactContainer = styled.div`
    background-color: #0e011b;
    padding: 80px var(--side-pad);

    display: flex;

    @media (max-width: 480px) {
        padding: 40px var(--mob-side-pad);
    }

    h3 {
        color: rgba(155, 138, 171, 0.5);
        font-family: Oswald;
        font-size: 5em;
        /* margin-right: 40px; */
        width: 40%;
    }

    p {
        color: white;
        font-size: 1em;
        font-weight: 300;
        font-size: 18px;
        line-height: 219.2%;
        margin: 1em 0;
    }
    a {
        display: inline-block;
        color: var(--secondary);
    }

    @media (max-width: 1000px) {
        padding: 60px var(--side-pad);

        h3 {
            font-size: 4em;
        }
    }

    @media (max-width: 900px) {
        padding: 60px var(--side-pad);

        h3 {
            font-size: 3em;
        }
    }
    @media (max-width: 1000px) {
        padding: 60px var(--side-pad);
        display: block;

        h3 {
            font-size: 4em;
            margin-bottom: 0.5em;
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        padding: 32px var(--side-pad);
        display: block;

        h3 {
            font-size: 3.5em;
            margin-bottom: 0.1em;
            width: 100%;
        }

        p {
            font-size: 1em;
            line-height: 180%;
        }
    }
`;
