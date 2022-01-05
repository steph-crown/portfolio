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

    // const sel = gsap.utils.selector(divRef);
    // const timeline = useRef<any>(null);

    const message: string = "Hey There, Meet Steph Crown.";
    const [messageShown, setMessageShown] = useState<string>("");
    const [messageIndex, setMessageIndex] = useState<number>(1);

    useEffect(() => {
        // timeline.current = gsap.timeline().to(sel("span:first-child"), {
        //     translateY: 40,
        // });
        // .to(sel("span"), {
        //     x: 100,
        // });

        const interval: any = setInterval(() => {
            setMessageShown(message.slice(0, messageIndex));
            if (messageIndex <= 27) {
                setMessageIndex((prev) => prev + 1);
            }
        }, 100);
        // animate h1
        // gsap.to(h1Ref.current, {
        //     translateY: 0,
        //     ease: "elastic",
        //     duration: 2.2,
        // });
        // timeline.current = gsap
        //     .timeline()
        //     .from(sel("p"), { translateY: 40, scrollTrigger:  });
        // gsap.to()

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
                    {/* <span>Hey</span> <span>There,</span> <span>Meet</span>{" "}
                    <span>Steph</span> <span>Crown</span> */}
                </h1>
                <p data-aos="fade-up">
                    {/* I'm a UX designer based in Lagos, Nigeria (for now) with 1+
                    years of experience in delivering end to end designs for
                    digital products. From ideation to execution, I make great
                    user experiences with UI design. */}
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
