import { FC } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AboutPage } from "./pages/about";
import { HomePage } from "./pages/home";

export const Pages: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
