import { useEffect } from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import useStars from "./useStars";

import garnetImg from "./assets/garnet/logo.png";
import demoImg from "./assets/garnet/demo.png";

function GarnetPage() {

    const stars = useStars("garnet", 20);

    useEffect(() => {
        document.title = "Garnet - C++ Networking Library - Josh Posner";
    }, []);

    return (
        <div id="container-garnet">
            <Link className="home" to="/"><Icon name="arrow_back" /></Link>
            <img id="heading-garnet" src={garnetImg} alt="Garnet" />
            <p className="stack">
                C++ &nbsp;&#x2022;&nbsp; TCP/UDP &nbsp;&#x2022;&nbsp; POSIX Sockets
                &nbsp;&#x2022;&nbsp; Winsock &nbsp;&#x2022;&nbsp; Multithreading
                &nbsp;&#x2022;&nbsp; CMake
            </p>
            <div id="content-garnet">
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
                    Building the two layers meant eliminating the platform-specific
                    edge cases that make raw socket code painful - blocking vs.
                    non-blocking I/O and socket lifecycle differences between
                    Windows and POSIX. The result: a multi-client TCP chat server
                    with connection events and broadcast messaging drops from ~700
                    lines of raw platform code to ~120 lines of Garnet API calls.
                </p>
                <p><br /><br />
                    Garnet is open-sourced with Doxygen documentation and example
                    programs, and has gained some recognition on&nbsp;
                    <a href="https://github.com/jopo86/garnet" target="_blank" rel="noreferrer">
                    its GitHub page</a> with {stars} stars.
                </p>
            </div>
            <div id="features-garnet">
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
            </div>
            <div id="demo-garnet">
                <h1>Demo</h1>
                <p>
                    Below is a simple example of a chat application using Garnet.<br /><br />
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
