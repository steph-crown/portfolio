import styled from "styled-components";

export const AboutBannerContainer = styled.div`
    /* background-color: var(--primary); */
    padding: 180px var(--side-pad);

    @media (max-width: 1000px) {
        padding: 160px var(--side-pad);
    }

    @media (max-width: 480px) {
        padding: 130px var(--mob-side-pad);
    }
    display: flex;
    justify-content: space-between;

    @media (max-width: 820px) {
        flex-direction: column-reverse;
        align-items: flex-end;
    }

    div.image {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        max-width: 500px;

        & > svg {
            animation: spin 6s linear infinite;
            -webkit-animation: spin 6s linear infinite;

            &:hover {
                animation-play-state: paused;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }

        @media (max-width: 1000px) {
            max-width: 420px;
        }

        @media (max-width: 820px) {
            max-width: 100%;
            width: auto;

            display: none;
        }
    }

    img {
        height: 500px;
        /* margin-right: 110px; */

        @media (max-width: 1000px) {
            height: 420px;
        }

        @media (max-width: 900px) {
            height: 340px;
        }

        /* 
        @media (max-width: 700px) {
            height: 420px;
        } */

        @media (max-width: 820px) {
            display: none;
        }
    }

    div.texts {
        flex: 1;
        position: relative;

        div.scroll {
            position: absolute;
            bottom: 0;
            right: 0;

            @media (max-width: 500px) {
                position: relative;
                display: flex;
                justify-content: center;
                margin-top: 8px;
            }
        }

        h1 {
            /* transform: translateY(-80px); */
            animation: animateBg 14s linear infinite;
            background-image: linear-gradient(
                0deg,
                #c2bdeb,
                #dee25d,
                #b2aed5,
                #c4c56a,
                #bab8cc,
                #c2bdeb,
                #e7e987
            );
            color: transparent;
            background-clip: text;
            background-size: 100% 600%;

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 3.5em;
            line-height: 150%;

            font-family: Oswald;

            font-weight: 500;

            @media (max-width: 480px) {
                font-size: 3em;
            }

            @media (max-width: 340px) {
                font-size: 2.6em;
            }

            @media (max-width: 300px) {
                font-size: 2.4em;
            }
        }
        @keyframes animateBg {
            0% {
                background-position: 0% 0%;
            }
            100% {
                background-position: 100% 100%;
            }
        }

        p {
            margin-top: 40px;
            @media (max-width: 480px) {
                margin-top: 24px;
            }
            color: white;
            font-size: 18px;
            line-height: 250%;

            a {
                color: var(--secondary);
                position: relative;
                display: inline-block;

                span {
                    background-color: var(--secondary);
                    width: 0%;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    left: 0;
                    transition: width 1s;
                }
                &:hover {
                    span {
                        width: 100%;
                    }
                }
            }
        }

        /* div.arrow-text svg {
            margin-top: -51px;
            margin-left: 20px;

            @media (max-width: 500px) {
                height: 40px;
            }
        } */
    }
`;
