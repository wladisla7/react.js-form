import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SignInPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App