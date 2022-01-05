import { FC, useEffect, useRef, useState } from "react";
import { AboutBannerContainer } from "./style";
import BannerImage from "./../../assets/avatar.svg";
import { ReactComponent as Roller1 } from "./../../assets/roller-1.svg";
// import { Link } from "react-router-dom";
// import { ReactComponent as ArrowLeft } from "./../../assets/arrow-left.svg";
import { ScrollDownSignal } from "../down-signal";
import { Button } from "../buttons";

export const AboutBanner: FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    // const sel = gsap.utils.selector(divRef);
    // const timeline = useRef<any>(null);

    const message: string = "Hello World...";
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
        <AboutBannerContainer>
            <div className="image">
                <img src={BannerImage} data-aos="fade-up" alt="Steph Crown" />
                <Roller1 />
            </div>

            <div className="texts" ref={divRef}>
                <h1 ref={h1Ref}>
                    {" "}
                    {messageShown}
                    <span></span>
                    {/* <span>Hey</span> <span>There,</span> <span>Meet</span>{" "}
                    <span>Steph</span> <span>Crown</span> */}
                </h1>
                <p data-aos="fade-up">
                    I'm a driven frontend developer who specializes in
                    developing intuitive web user interfaces and seamless user
                    experiences. I frequently assist in the identification and
                    resolution of complicated challenges using data-driven
                    procedures that transform business objectives into reality
                    while emphasizing empathy for the user.{" "}
                </p>{" "}
                <p data-aos="fade-up">
                    {" "}
                    I'm passionate about creating user-centric, entertaining,
                    and human web experiences.
                </p>
                <p data-aos="fade-up">
                    In my 2+ years of hands-on experience and a never-ending
                    desire for knowledge and self-improvement, I have developed
                    key values like as speed, accuracy, inventiveness, and
                    responsiveness to milestones. My goal is to gain more
                    experience and expertise in my field, and to find a job that
                    allows me to grow my knowledge and fully utilize my
                    knowledge, practice, and abilities, all while ensuring
                    result-oriented efforts to increase organizational
                    productivity.
                </p>
                <p data-aos="fade-up">
                    I appreciate debating and exchanging ideas and perspectives
                    that help us learn more. We should ask more questions to
                    strengthen our coding skills.
                </p>
                <a
                    data-aos="fade-up"
                    href="mailto:emmanuelstephen024@gmail.com"
                >
                    <Button style={{ width: "160px", marginTop: "5em" }}>
                        Get in Touch
                    </Button>
                </a>
                <div className="scroll">
                    <ScrollDownSignal />
                </div>
            </div>
        </AboutBannerContainer>
    );
};
