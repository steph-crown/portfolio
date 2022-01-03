import styled from "styled-components";

export const HamburgerContainer = styled.div<{ menuOpen: Boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30px;
    height: 20px;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.3);
    }

    div {
        height: 2px;
        background-color: var(--white);
        width: 100%;
        /* margin-bottom: 6px; */
        border-radius: 8px;
        transition: 0.2s ease-out;

        position: ${(props) => (props.menuOpen ? "absolute" : "unset")};

        &:first-child {
            width: 70%;
            top: ${(props) => (props.menuOpen ? "50%" : "0")};

            transform: ${(props) =>
                props.menuOpen ? "translateY(-100%) rotate(-45deg)" : ""};
        }
        &:nth-child(2) {
            /* width: 70%; */
            transform: ${(props) =>
                props.menuOpen ? "translate(400px,-50%)" : ""};
        }
        &:last-child {
            width: ${(props) => (props.menuOpen ? "70%" : "50%")};
            margin-bottom: 0;
            bottom: ${(props) => (props.menuOpen ? "50%" : "0")};

            /* position: ${(props) =>
                props.menuOpen ? "absolute" : "unset"} */
            transform: ${(props) => (props.menuOpen ? "rotate(45deg)" : "")};
        }
    }
`;
