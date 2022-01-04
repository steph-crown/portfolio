import { FC } from "react";
import { FunFactContainer } from "./style";

export const FunFact: FC = () => {
    return (
        <FunFactContainer>
            <h3>Fun Fact</h3>
            <div>
                <p>
                    I am currently a first class student of the Mathematics
                    Science, University of Lagos.
                </p>
                <p>
                    I am also a visual designer designing beautiful user
                    interfaces for mobile and web platforms{" "}
                    <a href="https://stephcrown.com">
                        Check out my portfolio <span></span>
                    </a>
                </p>
                <p>I solve a lot of Maths. </p>
                <p>
                    When I am not coding, designing, or solving maths, I play
                    the keyboard and the drums
                </p>
            </div>
        </FunFactContainer>
    );
};
