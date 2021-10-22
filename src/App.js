import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css"
// import SignInPage from "./pages/SignIn";
// import SignUpPage from "./pages/SignUp";



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SingInPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App