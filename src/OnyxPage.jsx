import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "./App";
import Icon from "./Icon";

import onyxImg from "./assets/onyx/logo.png";
import demoCarImg from "./assets/onyx/demo-car.png";
import demoCubesImg from "./assets/onyx/demo-cubes.png";
import bouncingBallImg from "./assets/onyx/bouncing-ball.gif";
import cardManiaImg from "./assets/onyx/card-mania.png";
import spikeDodgeImg from "./assets/onyx/spike-dodge.png";
import connect4Img from "./assets/onyx/connect-4.png";
import mathGatesImg from "./assets/onyx/math-gates.png";
import cannonImg from "./assets/onyx/cannon.png";

function OnyxPage() {

    const { geekMode, setGeekMode } = useContext(AppContext);

    const [stars, setStars] = useState('?');

    useEffect(() => {
        
        document.title = "Onyx - Josh Posner";

        // fetch star count
        const url = "https://api.github.com/repos/jopo86/onyx";

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => setStars(data.stargazers_count))
            .catch(e => console.log("Error fetching: ", e));

    }, []);

    return (
        <div id="container-onyx">
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
            <img id="heading-onyx" src={onyxImg} alt="" />
            <div id="content-onyx">
                { geekMode ? 
                    <>
                        <p className="desc-onyx" id="desc-onyx-1">
                            Onyx is a rendering engine/library written in C++
                            designed to drastically simplify the creation of native
                            graphical applications for Windows, Linux, and macOS.
                        </p>
                        <p className="desc-onyx" id="desc-onyx-2">
                            After ~350 hours, 24,932 lines of code, and 300+
                            GitHub commits, Onyx has become a viable and
                            recognized platform for creating lightweight games/apps
                            in both 2D and 3D using C++.
                        </p>
                        <p className="desc-onyx" id="desc-onyx-3">
                            I also provide guides and tutorials on <a href="https://github.com/jopo86/onyx" target="_blank">
                            Onyx's GitHub page</a>, which currently has {stars} stars.
                            Seen to the right are two simple demos, this first of which
                            is built into the library.
                        </p>
                    </> :
                    <>
                        <p className="desc-onyx" id="desc-onyx-1">
                            Onyx is a tool known as a 'library' or 'engine' written
                            in the popular programming language, C++, designed
                            to drastically simplify the creation of visual applications
                            for Windows, Linux, and macOS.
                        </p>
                        <p className="desc-onyx" id="desc-onyx-2">
                            After ~350 hours and 24,932 lines of code, Onyx has 
                            become a viable and recognized platform for creating 
                            lightweight games/apps in both 2D and 3D using C++.
                        </p>
                        <p className="desc-onyx" id="desc-onyx-3">
                            I also provide guides and tutorials for developers
                            on <a href="https://github.com/jopo86/onyx" target="_blank">
                            Onyx's GitHub page</a>, which currently has {stars} stars.
                            Seen to the right are two simple demos, this first of which
                            is built into the library.
                        </p>
                    </>
                }
                <img src={demoCarImg} className="img-onyx" id="img-onyx-demo-car" 
                    alt="Onyx Demo Image (Car)" title="Onyx Demo Image (Car)" />
                <img src={demoCubesImg} className="img-onyx" id="img-onyx-demo-cubes" 
                    alt="Onyx Demo Image (Cubes)" title="Onyx Demo Image (Cubes)" />
            </div>
            <div id="features-onyx">
                {
                    geekMode ?
                    <>
                        <h1>Features</h1>
                        <p>
                        &#x2022; Creating & Customizing Windows<br />
                        &#x2022; Input Handling (keyboard, mouse, controllers/gamepads)<br />
                        &#x2022; Rendering:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Hardcoded meshes<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Loaded models (OBJ format)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; GUI and Text<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Lighting (Ambient & Directional), Fog<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Colors and/or Textures<br />
                        &#x2022; Camera (movement in 2D or 3D world)<br />
                        &#x2022; Transforms (position, rotation, scale) for Renderables and the Camera<br />
                        &#x2022; Presets for Meshes, Shaders, and Renderables<br />
                        &#x2022; Monitor information<br />
                        &#x2022; Extensive Matrix & Vector Math<br />
                        &#x2022; Thread-safety (except functions that use OpenGL)<br />
                        &#x2022; Various system functions (clipboard access, modifier key states, and more)
                        </p>
                    </> :
                    <>
                        <h1>Features</h1>
                        <p>
                        &#x2022; Creating & Customizing Windows<br />
                        &#x2022; Input Handling (keyboard, mouse, controllers/gamepads)<br />
                        &#x2022; Rendering/Drawing:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; User-defined shapes<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Loaded models/shapes (OBJ file format)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; User Interface and Text<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Lighting (Ambient & Directional/Sunlight), Fog<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#x25e6; Colors and/or Textures/Images<br />
                        &#x2022; POV Camera (movement in 2D or 3D world)<br />
                        &#x2022; Transforms (position, rotation, scale)<br />
                        &#x2022; Monitor/Display information<br />
                        &#x2022; Extensive Matrix & Vector Math<br />
                        &#x2022; Various system functions
                        </p>
                    </>
                }
            </div>
            <div id="projects-onyx">
                <h1>Projects</h1>
                <p>I have created several little projects apart from the
                    demos above using Onyx, all of which can be seen below. 
                    Hover over the images for a brief description.
                </p>
                <div id="projects-onyx-grid">
                    <img src={bouncingBallImg} 
                        alt="Multivariable Function Visualizer & Physics with Bouncing Ball"
                        title="Multivariable Function Visualizer & Physics with Bouncing Ball" />
                    <img src={cardManiaImg}
                        alt="'Card Mania' Game with Playable Solitaire (Work in Progress)"
                        title="'Card Mania' Game with Playable Solitaire (Work in Progress)" />
                    <img src={spikeDodgeImg}
                        alt="Simple Game: Dodge the Spikes"
                        title="Simple Game: Dodge the Spikes" />
                    <img src={connect4Img}
                        alt="Connect 4 Game"
                        title="Connect 4 Game"
                        id="projects-onyx-img-connect-4" />
                    <img src={mathGatesImg}
                        alt="'Math Gates': Inspired by Fake Game Ads"
                        title="'Math Gates': Inspired by Fake Game Ads" />
                    <img src={cannonImg}
                        alt="'Cannon': Inspired by Fake Game Ads"
                        title="'Cannon': Inspired by Fake Game Ads" />
                </div>
            </div>
        </div>
    );
}

export default OnyxPage;
