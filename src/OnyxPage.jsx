import { useEffect } from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import useStars from "./useStars";

import onyxImg from "./assets/onyx/logo.png";
import demoCarImg from "./assets/onyx/demo-car.png";
import demoCubesImg from "./assets/onyx/demo-cubes.png";
import bouncingBallVid from "./assets/onyx/bouncing-ball.mp4";
import cardManiaImg from "./assets/onyx/card-mania.png";
import spikeDodgeImg from "./assets/onyx/spike-dodge.png";
import connect4Img from "./assets/onyx/connect-4.png";
import mathGatesImg from "./assets/onyx/math-gates.png";
import cannonImg from "./assets/onyx/cannon.png";

function OnyxPage() {

    const stars = useStars("onyx", 50);

    useEffect(() => {
        document.title = "Onyx - C++ Rendering Engine - Josh Posner";
    }, []);

    return (
        <div id="container-onyx">
            <Link className="home" to="/"><Icon name="arrow_back" /></Link>
            <img id="heading-onyx" src={onyxImg} alt="Onyx" />
            <p className="stack">
                C++ &nbsp;&#x2022;&nbsp; OpenGL 4.1 &nbsp;&#x2022;&nbsp; GLFW
                &nbsp;&#x2022;&nbsp; FreeType &nbsp;&#x2022;&nbsp; Assimp
                &nbsp;&#x2022;&nbsp; CMake &nbsp;&#x2022;&nbsp; Doxygen
            </p>
            <div id="content-onyx">
                <p className="desc-onyx" id="desc-onyx-1">
                    Onyx is a rendering engine/library written in C++
                    designed to drastically simplify the creation of native
                    graphical applications for Windows, Linux, and macOS. It
                    abstracts low-level graphics APIs behind a modern,
                    RAII-based C++ interface.
                </p>
                <p className="desc-onyx" id="desc-onyx-2">
                    Rendering a directionally lit 3D model with a live text
                    overlay takes 1,000+ lines of raw OpenGL/GLFW/FreeType/Assimp.
                    In Onyx it takes about 80 easy-to-follow lines. Every core
                    subsystem - windowing, text rendering, shader/pipeline
                    management - is implemented from scratch across 25,000+
                    lines of C++, with resource management patterns that keep
                    the API safe and leak-free.
                </p>
                <p className="desc-onyx" id="desc-onyx-3">
                    Onyx is open-sourced with Doxygen documentation, custom
                    integration testing, and step-by-step tutorials on <a
                    href="https://github.com/jopo86/onyx" target="_blank" rel="noreferrer">
                    its GitHub page</a>, which has earned {stars} stars from
                    developers looking for a lighter-weight alternative to
                    existing engines. Seen to the right are two simple demos,
                    the first of which is built into the library.
                </p>
                <img src={demoCarImg} className="img-onyx" id="img-onyx-demo-car"
                    alt="Onyx Demo Image (Car)" title="Onyx Demo Image (Car)" />
                <img src={demoCubesImg} className="img-onyx" id="img-onyx-demo-cubes"
                    alt="Onyx Demo Image (Cubes)" title="Onyx Demo Image (Cubes)" />
            </div>
            <div id="features-onyx">
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
            </div>
            <div id="projects-onyx">
                <h1>Built With Onyx</h1>
                <p>Apart from the demos above, I used these small projects to
                    validate the engine against real workloads - physics, input,
                    text, UI, and 3D math. Hover over any of them for a brief
                    description.
                </p>
                <div id="projects-onyx-grid">
                    <video src={bouncingBallVid}
                        autoPlay loop muted playsInline
                        aria-label="Multivariable Function Visualizer & Physics with Bouncing Ball"
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
