import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "./App";
import Icon from "./Icon";

import garnetImg from "./assets/garnet/logo.png";
import demoImg from "./assets/garnet/demo.png";

function GarnetPage() {

    const { geekMode, setGeekMode } = useContext(AppContext);

    const [stars, setStars] = useState('?');

    useEffect(() => {
        
        document.title = "Garnet - Josh Posner";

        // fetch star count
        const url = "https://api.github.com/repos/jopo86/garnet";

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => setStars(data.stargazers_count))
            .catch(e => console.log("Error fetching: ", e));

    }, []);

    return (
        <div id="container-garnet">
            <Link className="home" to="/"><Icon name="arrow_back" /></Link>
            <div className={`geek-mode-toggle ${geekMode ? "on" : ""}`}
                title="Click to toggle geek mode (computer jargon) on/off. Turn this off if you're a normal person."
                onClick={() => {
                    setGeekMode(gm => !gm);
                    document.querySelector(".geek-mode-toggle").classList.toggle("on");
                }}>
                { geekMode ? <Icon name="toggle_on"></Icon> : <Icon name="toggle_off"></Icon> }
                &nbsp;&nbsp;Geek Mode
            </div>
            <img id="heading-garnet" src={garnetImg} alt="" />
            <div id="content-garnet">
                {
                    geekMode ?
                    <>
                        <p>
                            Garnet is a small but powerful networking library written 
                            in C++ designed to simplify the creation of applications
                            that require data transfer between multiple devices.
                            Garnet provides two abstraction layers - the first of which
                            combines the Windows and POSIX Socket APIs into a
                            single, cross-platform socket interface, and the second of which
                            uses the first to create a high-level, multithreaded,
                            event-driven, and, most importantly, user-friendly
                            server/client architecture.
                        </p>
                        <p><br /><br />
                            While being small and simple, Garnet is a great choice for
                            easy and efficient TCP/UDP networking in C++ applications, and has
                            gained some recognition on&nbsp;
                            <a href="https://github.com/jopo86/garnet" target="_blank">
                            its GitHub Page</a> with {stars} stars.
                        </p>
                        <p><br /><br />
                            It also has 'net' in its name! How cool is that?
                        </p>
                    </> :
                    <>
                        <p>
                            Garnet is a small but powerful tool written in the
                            popular programming language, C++. It was 
                            designed to simplify the creation of applications
                            that require data transfer between multiple devices.
                            Garnet works through two layers of simplification - the 
                            first of which combines ugly platform-specific code into a
                            single cross-platform interface, and the second of which
                            uses the first to create a fast and user-friendly
                            server/client architecture.
                        </p>
                        <p><br /><br />
                            While being small and simple, Garnet is a great choice for
                            easy and efficient networking in C++ applications, and has
                            gained some recognition on&nbsp;
                            <a href="https://github.com/jopo86/garnet" target="_blank">
                            its GitHub Page</a> with {stars} stars.
                        </p>
                        <p><br /><br />
                            It also has 'net' in its name! How cool is that?
                        </p>
                    </>
                }
            </div>
            <div id="features-garnet">
                { geekMode ?
                    <>
                        <h1>Features</h1>
                        <div>
                        <p>
                        &#x2022; <code>Socket</code> class<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Low-level cross-platform communication between systems<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; More intuitive structure for sockets than with WSA or POSIX but with the same functionalities<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Native support for TCP or UDP<br /><br />
                        </p>
                        <p>
                        &#x2022; <code>ServerTCP</code> and <code>ServerUDP</code> classes<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; High-level cross-platform basic server functionality<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Multithreaded to allow for concurrent accepting / receiving & main thread<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Callback-based structure (client connect/disconnect callback (TCP only), receive callback)<br /><br />
                        </p>
                        <p>
                        &#x2022; <code>ClientTCP</code> and <code>ClientUDP</code> classes<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; High-level cross-platform basic client functionality<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Multithreaded to allow for concurrent receiving & main thread<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Callback-based structure (receive callback)<br /><br />
                        </p>
                        </div>
                    </> :
                    <>
                        <h1>Features</h1>
                        <div>
                        <p>
                        &#x2022; Sockets<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; The first layer of simplification <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Combines platform-specific code into one clean & cross-platform interface <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; A 'socket' is one endpoint of a two-way connection between devices<br /><br />
                        </p>
                        <p>
                        &#x2022; Server/Client Architecture<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; The second layer of simplification <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Uses sockets in first layer to create a server/client(s) pattern <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; There is only one 'server' that receives & sends data from clients <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; There can be many 'clients', each with their own connection to the server <br /><br />
                        </p>
                        <p>
                        &#x2022; Networking Protocols <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Different protocols mean different methods of sending data <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Most common are TCP and UDP <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; TCP is very reliable, but can be too slow for one's needs <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; UDP is very fast, but can be unreliable <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Garnet provides the choice of either! <br /><br />
                        </p>
                        </div>
                    </>
                }
            </div>
            <div id="demo-garnet">
                <h1>Demo</h1>
                <p>
                    Below is a simple example of a chat applicaton using Garnet.<br /><br />
                </p>
                <img src={demoImg} alt="Garnet Demo" title="Garnet Demo" />
                <p>
                    The user interface was created using&nbsp;
                    <Link className="link" to="/onyx">Onyx</Link>, my rendering engine.
                </p>
            </div>
        </div>
    );
}

export default GarnetPage;
