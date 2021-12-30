import { FC } from "react";
import { Banner } from "../../components/banner";
import { Header } from "../../components/header";
// import { useHistory } from "react-router-dom";
import { HomeContainer } from "./style";
// import { gsap } from "gsap";
// ease : ["elastic", "back"]

export const HomePage: FC = () => {
    return (
        <HomeContainer>
            <Header curr={[0, 1]} />
            <Banner />
        </HomeContainer>
    );
};
