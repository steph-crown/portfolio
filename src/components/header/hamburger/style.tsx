import styled from "styled-components";

export const HamburgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30px;
    height: 25px;
    justify-content: space-between;
    div {
        height: 3px;
        background-color: var(--white);
        width: 100%;
        /* margin-bottom: 6px; */
        border-radius: 8px;

        &:first-child {
            width: 70%;
        }
        &:last-child {
            width: 15px;
            margin-bottom: 0;
        }
    }
`;
