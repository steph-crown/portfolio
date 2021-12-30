import React, { useEffect } from "react";
import "./App.css";
import { Pages } from "./routes";
import styled from "styled-components";

function App() {
    useEffect(() => {
        return () => {};
    }, []);
    return (
        <AppContainer>
            <div className="App">
                <Pages />
            </div>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div``;
