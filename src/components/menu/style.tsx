import styled from "styled-components";
import line from "./../../assets/Vector.svg";

export const MenuContainer = styled.div<{ menuOpen: Boolean }>`
    box-sizing: border-box;
    position: fixed;
    /* height: 100vh; */
    top: 0;
    bottom: 0;
    transition: width 0.7s ease 0.4s, opacity 0.6s ease 0.4s;

    width: ${(props) => (props.menuOpen ? "100%" : "0")};

    div.menu-bg {
        position: fixed;
        /* top: 0; */
        left: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        /* height: 100%; */
        width: 100%;
        z-index: 1;
        top: 0;

        span {
            transition: height 0.8s ease-out;
            &:nth-child(2) {
                transition: height 0.8s ease-out 0.3s;
            }
            &:nth-child(3) {
                transition: height 0.8s ease-out 0.6s;
                bottom: 0;
            }
            &:nth-child(4) {
                transition: height 0.8s ease-out 0.9s;
            }
            background: rgba(18, 0, 36, 0.9150980392156862);
            /* height: 100vh; */
            display: block;
            /* transform: translateY(-100%); */
            height: ${(props) => (props.menuOpen ? "100vh" : "0")};

            &:first-child {
            }
        }
    }

    div.menu-links {
        pointer-events: ${(props) => (props.menuOpen ? "auto" : "none")};

        color: white;
        position: relative;
        z-index: 8338383838;
        padding: 0px var(--side-pad);
        transition: transform 0.6s ease 0.4s, opacity 0.6s ease 0.4s;
        /* transition-delay: 0.4s; */
        overflow: auto;
        /* display: ${(props) => (props.menuOpen ? "block" : "none")}; */
        transform: ${(props) =>
            props.menuOpen ? "translateX(0)" : "translateX(100px)"};
        opacity: ${(props) => (props.menuOpen ? "1" : "0")};

        @media (max-width: 480px) {
            padding: 0px var(--mob-side-pad);

            padding-top: 100px;
        }
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
            text-decoration: none;
            pointer-events: ${(props) => (props.menuOpen ? "auto" : "none")};

            & {
                display: block;
                width: -webkit-fit-content;
                width: -moz-fit-content;
                width: fit-content;
                margin: 24px 0;
                font-size: 5vw;
                /* -webkit-transform: translateX(40px); */
                /* transform: translateX(40px); */
                line-height: 1.4;
                font-size: 3em;
                font-weight: 500;
                position: relative;
                margin-left: 100px;

                &:nth-child(2n) {
                    margin-left: -100px;
                }
                @media (max-width: 600px) {
                    font-size: 2.4em;
                    margin-left: 80px;
                    margin: 20px 0;

                    &:nth-child(2n) {
                        margin-left: -80px;
                    }
                }
                @media (max-width: 300px) {
                    font-size: 2em;
                    margin-left: 30px;
                    &:nth-child(2n) {
                        margin-left: -30px;
                    }
                }
                /* &:after {
                    content: "";
                    background-image: url(${line});
                    background-position: 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: 8px;
                    width: 100%;
                    position: absolute;
                    bottom: 5px;
                    right: 0;
                    display: block;
                } */

                &.current:after {
                    content: "";
                    background-image: url(${line});
                    background-position: 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: 8px;
                    width: 100%;
                    position: absolute;
                    bottom: 5px;
                    right: 0;
                    display: block;
                }

                /* @media (max-width: 700px) {
                    font-size: 3em;
                } */
                color: white;
                font-family: Oswald;
                /* background: linear-gradient(
                    -45deg,
                    #c2bdeb,
                    #d6d93b,
                    #c2bdeb,
                    #dbdd94,
                    #c2bdeb,
                    #c9c956,
                    #cccadf,
                    #d6d93b
                ); */

                animation: animateBg 14s linear infinite;
                &:nth-child(2n) {
                    animation: animateBg2 14s linear infinite;
                }
                background-image: linear-gradient(
                    0deg,
                    #c2bdeb,
                    #e6e981,
                    #b2aed5,
                    #d7d89d,
                    #bab8cc,
                    #c2bdeb,
                    #e7e987
                );
                background-size: 100% 600%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;

                &:hover {
                    background: transparent;
                    /* border: 1px solid white; */
                    -webkit-text-stroke: 1px;
                    -webkit-text-stroke-color: hsla(0, 0%, 100%, 0.678);
                }
            }

            @keyframes animateBg {
                0% {
                    background-position: 0% 0%;
                }
                100% {
                    background-position: 100% 0%;
                }
            }
            @keyframes animateBg2 {
                0% {
                    background-position: 100% 100%;
                }
                100% {
                    background-position: 0% 0%;
                }
            }
        }
    }
`;
