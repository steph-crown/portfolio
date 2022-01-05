import React, { useEffect, useState } from "react";
import "./App.css";
import { Pages } from "./routes";
import styled from "styled-components";
import { Grid } from "./components/grid";

import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { Loader } from "./components/loader";

function App() {
    const [show, setshow] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loaderTime = setTimeout(() => {
            setLoading(false);
        }, 4200);
        return () => {
            clearTimeout(loaderTime);
        };
    }, []);
    return (
        <AppContainer>
            {loading && <Loader />}
            {!loading && (
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
            )}
            <Grid />
            <AnimatedCursor color="255, 255, 255" innerSize={12} />
        </AppContainer>
    );
}

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

export default App;

const AppContainer = styled.div``;
