import styled from "styled-components";

export const ScrollDownSignalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div.lining {
        background-color: var(--shade-1);
        height: 140px;
        width: 1px;
        border-radius: 20px;
        position: relative;
        margin-bottom: 16px;

        div.scroll {
            width: 2px;
            height: 64px;
            top: 0;
            left: 0;
            right: 0;
            background: var(--white);
            border-radius: 20px;
            animation-name: scroll;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }

        @keyframes scroll {
            from {
                top: 0;
            }
            to {
                top: 55%;
            }
        }
    }
    & div > svg {
        display: block;
        /* stroke: currentColor; */
        color: white;

        &:first-child {
            animation-name: first;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }

        &:last-child {
            animation-name: third;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
        &:nth-child(2) {
            animation-name: second;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    }

    @keyframes first {
        0% {
            color: rgba(155, 138, 171, 0.2);
        }
        30% {
            color: rgba(155, 138, 171, 0.8);
        }
        70% {
            color: var(--white);
        }
    }

    @keyframes second {
        0% {
            color: rgba(155, 138, 171, 0.8);
        }
        30% {
            color: rgba(155, 138, 171, 0.2);
        }
        70% {
            color: var(--white);
        }
    }

    @keyframes third {
        0% {
            color: var(--white);
        }
        30% {
            color: rgba(155, 138, 171, 0.2);
        }
        70% {
            color: rgba(155, 138, 171, 0.8);
        }
    }
`;
