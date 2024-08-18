import { useEffect, useContext } from "react";

import { AppContext } from "./App";
import Icon from "./Icon";
import Blurb from "./Blurb";

function HomePage() {

    const { geekMode, setGeekMode } = useContext(AppContext);

    useEffect(() => {
        document.title = "Portfolio - Josh Posner";
    }, []);

    return (
        <div id="container-home">
            <div className={`geek-mode-toggle ${geekMode ? "on" : ""}`}
                title="Click to toggle geek mode (computer jargon) on/off. Turn this off if you're a normal person."
                onClick={() => {
                    setGeekMode(gm => !gm);
                    document.querySelector(".geek-mode-toggle").classList.toggle("on");
                }}>
                { geekMode ? <Icon name="toggle_on"></Icon> : <Icon name="toggle_off"></Icon> }
                &nbsp;&nbsp;Geek Mode
            </div>
            <h1 id="heading">Josh<br />Posner</h1>
            <Blurb id="blurb-card-onyx" title="Onyx" link="/onyx" icon={true} desc={
                geekMode ? 
                <>
                    Onyx is a high-level, cross-platform C++ rendering engine 
                    using OpenGL 4.1, with additional functionalities including 
                    window and input handling using GLFW.
                    <br/><br/>
                    The intuitive and well-structured codebase makes it simpler 
                    than ever to code games, apps, or any graphical interface 
                    using a language as complex as C++.
                </> :
                <>
                    Onyx is a tool known as a 'library' or 'engine' written 
                    in the popular programming language, C++. It is designed
                    to help developers create visual applications for Windows,
                    Linux, and macOS.
                    <br/><br/>
                    The engine was designed with simplicity and intuitiveness
                    in mind, making it a great choice for coding games, apps, 
                    or any other graphical interface using a programming 
                    language as complex as C++.
                </>

            }/>
            <Blurb id="blurb-card-garnet" title="Garnet" link="/garnet" icon={true} desc={
                geekMode ?
                <>
                    Garnet is a small, cross-platform C++ networking library 
                    providing both high-level server/client architecture and 
                    low-level socket operations using TCP or UDP.
                </> :
                <>
                    Garnet is another C++ library, designed to simplify the 
                    process of creating appications that utilize a concept 
                    known as 'networking' using a pattern known as 'server/client'.
                    <br /><br />
                    Networking is the process of sending and receiving data
                    between multiple devices over the internet, such as
                    you visiting this website right now.
                </>
            }/>
        </div>
    )
}

export default HomePage;
