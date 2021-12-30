import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: var(--primary);
    padding: 48px var(--side-pad);

    @media (max-width: 480px) {
        padding: 40px var(--side-pad);
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
