import { FC, useEffect, useRef, useState } from "react";
import { BannerContainer } from "./style";
import BannerImage from "./../../assets/avatar.svg";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "./../../assets/arrow-left.svg";
import { ScrollDownSignal } from "../down-signal";
// import { gsap } from "gsap";

export const Banner: FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const message: string = "Hey There, Meet Steph Crown.";
    const [messageShown, setMessageShown] = useState<string>("");
    const [messageIndex, setMessageIndex] = useState<number>(1);

    useEffect(() => {
        const interval: any = setInterval(() => {
            setMessageShown(message.slice(0, messageIndex));
            if (messageIndex <= 27) {
                setMessageIndex((prev) => prev + 1);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [messageIndex]);
    return (
        <BannerContainer>
            <img src={BannerImage} alt="Steph Crown" data-aos="fade-up" />
            <div className="texts" ref={divRef}>
                <h1 ref={h1Ref}>
                    {" "}
                    {messageShown}
                    <span></span>
                </h1>
                <p data-aos="fade-up">
                    I am frontend developer based in Lagos, Nigeria with 2+
                    years of developing mobile responsive, user-friendly web
                    application frontends. From using CSS to implement pixel
                    perfect designs to utilizing frontend frameworks to consume
                    API,I make great web user interface experience for users.
                </p>
                <div className="arrow-text">
                    <p style={{ marginRight: "-20px" }} data-aos="fade-up">
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

                <div className="scroll">
                    <ScrollDownSignal />
                </div>
            </div>
        </BannerContainer>
    );
};
