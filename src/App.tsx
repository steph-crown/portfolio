import React, { useEffect, useState } from "react";
import "./App.css";
import { Pages } from "./routes";
import styled from "styled-components";
import { Grid } from "./components/grid";

function App() {
    useEffect(() => {
        return () => {};
    }, []);
    const [show, setshow] = useState<boolean>(false);
    return (
        <AppContainer>
            <div className="App">
                <Pages />
                <div className="left-abs">
                    <div
                        className="checkout"
                        onClick={() => setshow(!show)}
                    ></div>
                </div>
                <div className={"redirect " + (show ? "show" : "")}>
                    <button onClick={() => setshow(false)}>&times;</button>
                    🎉 Yaaay, you saw this. I am also a visual designer so I
                    thought to show you my design portfolio.{" "}
                    <a href="https://stephcrown.vercel.app">
                        Click here to go ahead <span></span>
                    </a>
                </div>
            </div>
            <Grid />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div``;
