import styled from "styled-components";
import { IHeaderContainerProps } from "./interface";

export const HeaderContainer = styled.div<IHeaderContainerProps>`
    padding: ${(props) =>
        props.isReduced && !props.menuOpen
            ? "40px var(--side-pad)"
            : "54px var(--side-pad)"};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    transition: 0.3s ease-out;
    border-bottom: ${(props) =>
        props.isReduced && !props.menuOpen
            ? "1px solid hsla(0, 0%, 100%, 0.05)"
            : "none"};
    background: ${(props) =>
        props.isReduced
            ? "rgba(18, 0, 36, 0.9150980392156862)"
            : "transparent"};

    @media (max-width: 480px) {
        padding: 32px var(--mob-side-pad);

        padding: ${(props) =>
            props.isReduced && !props.menuOpen
                ? "32px var(--mob-side-pad)"
                : "42px var(--mob-side-pad)"};
    }

    &,
    & .flex {
        display: flex;
        min-height: 2px;
        align-items: center;
    }
    justify-content: space-between;
    width: 100%;
    a.logo {
        display: flex;
        min-height: 2px;
        align-items: center;
        margin-right: 72px;

        h6 {
            color: var(--white);
            font-size: 18px;
            font-weight: 600;
            margin: 0 0.4px;

            /* Animate logo on hover cubic-bezier(0.32, -0.12, 0.16, 1.14)*/
            transition: transform 0.2s;
            &:nth-child(10) {
                transition-delay: 0.3s;
            }
            &:nth-child(9) {
                transition-delay: 0.28s;
            }
            &:nth-child(8) {
                transition-delay: 0.26s;
            }
            &:nth-child(7) {
                transition-delay: 0.24s;
            }
            &:nth-child(6) {
                transition-delay: 0.22s;
            }
            &:nth-child(5) {
                transition-delay: 0.2s;
            }
            &:nth-child(4) {
                transition-delay: 0.18s;
            }
            &:nth-child(3) {
                transition-delay: 0.16s;
            }
            &:nth-child(2) {
                transition-delay: 0.14s;
            }
            &:nth-child(1) {
                transition-delay: 0.12s;
            }
            &.y {
                color: var(--secondary);
            }
            &.space-left {
                margin-left: 6px;
            }
        }

        &:hover h6 {
            transform: translateX(10px);
        }
    }

    nav.flex {
        a {
            color: var(--shade-1);
            font-weight: 500;
            font-size: 1em;
            display: block;
            margin-right: 40px;

            &.current {
                color: var(--white);
                font-weight: 600;
            }
        }

        @media (max-width: 700px) {
            display: none;
        }
    }
`;
