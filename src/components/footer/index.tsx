import { FC } from "react";
import { FooterContainer } from "./style";
import left from "./../../assets/left.svg";
import { Button } from "../buttons";

export const Footer: FC = () => {
    return (
        <FooterContainer>
            <div className="first">
                <h1>
                    LET'S BUILD
                    <br />
                    SOMETHING TOGETHER
                </h1>
                <p>
                    Do you think I'd be a good companion for your next
                    adventure? Take a minute to tell me about your project, or
                    if you need some front-end development help, please send me
                    a message below. I'm currently AVAILABLE for any front-end
                    development projects.
                </p>
            </div>
            <div className="right">
                <img src={left} alt="look left" />
                <Button>Send Message</Button>
            </div>
        </FooterContainer>
    );
};
