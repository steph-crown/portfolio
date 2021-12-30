import { FC } from "react";
import { BannerContainer } from "./style";
import BannerImage from "./../../assets/avatar.svg";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "./../../assets/arrow-left.svg";

export const Banner: FC = () => {
    return (
        <BannerContainer>
            <img src={BannerImage} alt="Steph Crown" />
            <div className="texts">
                <h1>Hey There, Meet Steph Crown</h1>
                <p>
                    I'm a UX designer based in Lagos, Nigeria (for now) with 1+
                    years of experience in delivering end to end designs for
                    digital products. From ideation to execution, I make great
                    user experiences with UI design.
                </p>
                <div>
                    <p style={{ marginRight: "-20px" }}>
                        Learn more{" "}
                        <Link to="/">
                            about me <span></span>
                        </Link>{" "}
                        or jump straight to{" "}
                        <Link to="/">
                            {" "}
                            my work <span></span>
                        </Link>
                        <ArrowLeft />
                    </p>
                </div>
            </div>
        </BannerContainer>
    );
};
