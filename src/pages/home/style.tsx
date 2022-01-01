import styled from "styled-components";

interface IHomeContainer extends HTMLDivElement {
    ref: React.RefObject<HTMLDivElement>;
}

export const HomeContainer = styled.div.attrs<IHomeContainer>(
    (props: IHomeContainer) => ({ ref: props.ref })
)`
    /* background-color: var(--primary); */
`;
