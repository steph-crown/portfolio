import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin: 100px var(--side-pad);
    /* margin-top: 100px; */

    @media (max-width: 480px) {
        margin: 100px var(--mob-side-pad);
    }

    background: linear-gradient(
        180deg,
        #20053c 38.12%,
        rgba(24, 2, 47, 0) 80.43%
    );

    padding: 3.5em 5em;
    border-radius: 24px;
    margin-bottom: 0;

    @media (max-width: 480px) {
        padding: 1.5em;
    }

    display: flex;
    min-height: 2px;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 480px) {
        display: block;
    }

    h1 {
        background: linear-gradient(
            90deg,
            #ffffff 0%,
            #d6d93b 35.29%,
            #ffffff 78.31%
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3.5em;
        line-height: 150%;
        font-family: Oswald;
        font-weight: 500;

        @media (max-width: 480px) {
            font-size: 2.2em;
        }
    }
    div.first {
        width: 60%;
        @media (max-width: 480px) {
            width: 100%;
        }
        p {
            font-weight: normal;
            font-size: 20px;
            line-height: 174.9%;
            /* or 35px */

            letter-spacing: 0.08em;
            color: var(--white);
            margin-top: 1em;
        }
    }

    div.right {
        width: 30%;
        display: flex;
        min-height: 2px;
        align-items: flex-end;
        height: 72px;
        img {
            @media (max-width: 480px) {
                height: 64px;
            }
            margin-right: 20px;
        }

        button {
            width: 160px;
        }
    }
`;
