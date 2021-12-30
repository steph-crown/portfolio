import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: var(--primary);
    padding: 48px var(--side-pad);

    @media (max-width: 480px) {
        padding: 40px var(--side-pad);
    }
    a.logo {
        display: flex;
        min-height: 2px;
        align-items: center;

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
`;
