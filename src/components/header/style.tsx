import styled from "styled-components";
import { IHeaderContainerProps } from "./interface";

export const HeaderContainer = styled.div<IHeaderContainerProps>`
    /* background-color: var(--primary); */
    padding: ${(props) =>
        props.isReduced ? "40px var(--side-pad)" : "60px var(--side-pad)"};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    transition: 0.3s ease-out;
    border-bottom: ${(props) =>
        props.isReduced ? "1px solid hsla(0, 0%, 100%, 0.05)" : "none"};
    background: ${(props) =>
        props.isReduced
            ? "rgba(18, 0, 36, 0.9150980392156862)"
            : "transparent"};

    @media (max-width: 480px) {
        padding: 32px var(--mob-side-pad);
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

            &.y {
                color: var(--secondary);
            }
            &.space-left {
                margin-left: 6px;
            }
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
