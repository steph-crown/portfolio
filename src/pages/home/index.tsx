import { FC } from "react";
import { Header } from "../../components/header";
// import { useHistory } from "react-router-dom";
import { HomeContainer } from "./style";
// import { gsap } from "gsap";
// ease : ["elastic", "back"]

export const HomePage: FC = () => {
    return (
        <HomeContainer>
            <Header curr={[0, 1]} />
        </HomeContainer>
    );
};
