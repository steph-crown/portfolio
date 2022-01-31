import styled from "styled-components";

export const BlogBannerContainer = styled.div`
    margin: 100px var(--side-pad);
    background-color: #edeeaa;
    padding: 3.5em 5em;
    border-radius: 24px;
    @media (max-width: 1000px) {
        padding: 2.5em;
        padding-bottom: 28px;
    }

    @media (max-width: 480px) {
        padding: 1.5em;
        padding-bottom: 28px;
    }

    h3 {
        color: var(--primary);
        font-size: 2.4em;
        max-width: 20em;
        line-height: 170%;
    }

    @media (max-width: 480px) {
        margin: 100px var(--mob-side-pad);
        margin-bottom: 0;
    }
`;
