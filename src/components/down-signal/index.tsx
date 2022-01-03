import { FC } from "react";
import { ScrollDownSignalContainer } from "./style";
import { ReactComponent as DownIcon } from "./../../assets/chevron-down.svg";

export const ScrollDownSignal: FC = () => {
    return (
        <ScrollDownSignalContainer>
            <div className="lining">
                <div className="scroll"></div>
            </div>
            <div>
                <DownIcon />
                <DownIcon />
                <DownIcon />
            </div>
        </ScrollDownSignalContainer>
    );
};
