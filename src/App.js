import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
                console.log("i resized");
            }
        };

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });
    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Menu" component={Menu} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
