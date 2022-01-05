import { FC } from "react";
import { LoaderContainer } from "./style";

export const Loader: FC = () => {
    return (
        <LoaderContainer>
            <div className="container">
                <div className="box">
                    <div className="title">
                        <span className="block"></span>
                        <h1>
                            Steph Crown<span></span>
                        </h1>
                    </div>

                    <div className="role">
                        <div className="block"></div>
                        <p>Frontend Developer</p>
                    </div>
                </div>
            </div>
        </LoaderContainer>
    );
};
