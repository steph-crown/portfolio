import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin: 100px var(--side-pad);
    /* margin-top: 100px; */

    @media (max-width: 480px) {
        margin: 100px var(--mob-side-pad);
        margin-bottom: 0;
    }

    background: linear-gradient(
        180deg,
        #20053c 38.12%,
        rgba(24, 2, 47, 0) 80.43%
    );

    padding: 3.5em 5em;
    border-radius: 24px;
    margin-bottom: 0;
    padding-bottom: 56px;

    @media (max-width: 1000px) {
        padding: 2.5em;
        padding-bottom: 28px;
    }

    @media (max-width: 480px) {
        padding: 1.5em;
        padding-bottom: 28px;
    }

    section {
        display: flex;
        min-height: 2px;
        align-items: flex-end;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 1000px) {
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
                font-size: 2.5em;
            }
        }
        div.fir {
            width: 55%;

            @media (max-width: 1000px) {
                width: 100%;
            }
            p {
                font-weight: normal;
                font-size: 20px;
                line-height: 200%;
                /* or 35px */

                letter-spacing: 0.04em;
                color: var(--white);
                margin-top: 1em;
            }
        }

        div.sec {
            width: 43%;

            display: flex;
            min-height: 2px;
            align-items: flex-end;
            height: 72px;
            justify-content: flex-end;
            @media (max-width: 1000px) {
                width: 100%;
                justify-content: flex-start;
                margin-top: 40px;
            }
            img {
                height: 72px;
                @media (max-width: 480px) {
                    height: 64px;
                }
                margin-right: 20px;
            }

            button {
                width: 160px;
            }
        }
    }

    div.hor-line {
        height: 1px;
        background: rgba(255, 255, 255, 0.25);
        width: 100%;
        margin-top: 5em;
    }

    div.flexx {
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 40px;
        div.socials {
            display: flex;
            margin-bottom: 1.2em;
            flex-wrap: wrap;

            a {
                display: block;
                margin-right: 1em;
            }
        }
        p {
            color: #ffffff6f;
            font-size: 1em;
        }
    }
`;
