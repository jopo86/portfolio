import { useEffect } from "react";

import Blurb from "./Blurb";
import Icon from "./Icon";
import useStars from "./useStars";

function HomePage() {

    const onyxStars = useStars("onyx", 50);
    const garnetStars = useStars("garnet", 20);

    useEffect(() => {
        document.title = "Josh Posner - Software Engineer";
    }, []);

    return (
        <div id="container-home">
            <header id="intro">
                <h1 id="heading">Josh<br />Posner</h1>
                <p id="tagline">
                    Software engineer seeking a Spring 2027 co-op.
                </p>
                <p id="meta">
                    B.S. Computer Science &amp; Mathematics, Northeastern University
                    &nbsp;&#x2022;&nbsp; 3.95 GPA &nbsp;&#x2022;&nbsp; Boston, MA
                </p>
                <ul id="skills">
                    <li>C/C++</li>
                    <li>Rust</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>OpenGL</li>
                    <li>Git</li>
                    <li>CMake</li>
                    <li>Linux</li>
                </ul>
                <nav id="links">
                    <a href="/portfolio/Joshua-Posner-Resume.pdf" target="_blank" rel="noreferrer">
                        <Icon name="description" />&nbsp;Resume
                    </a>
                    <a href="https://github.com/jopo86" target="_blank" rel="noreferrer">
                        <Icon name="code" />&nbsp;GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-posner-2632a4399/" target="_blank" rel="noreferrer">
                        <Icon name="person" />&nbsp;LinkedIn
                    </a>
                    <a href="mailto:joshrposner@gmail.com">
                        <Icon name="mail" />&nbsp;Email
                    </a>
                </nav>
            </header>
            <Blurb id="blurb-card-onyx" title="Onyx" link="/onyx" icon={true}
                subtitle={`C++/OpenGL Rendering Engine • ${onyxStars} GitHub stars`}
                tags={["C++", "OpenGL 4.1", "GLFW", "CMake", "Cross-platform"]}
                desc={
                <>
                    Onyx is a high-level, cross-platform C++ rendering engine
                    using OpenGL 4.1, with additional functionalities including
                    window and input handling using GLFW.
                    <br/><br/>
                    It cuts a directionally lit 3D model with a live text overlay
                    from 1,000+ lines of raw OpenGL/GLFW/FreeType/Assimp down to
                    about 80 lines of Onyx API calls.
                </>
            }/>
            <Blurb id="blurb-card-garnet" title="Garnet" link="/garnet" icon={true}
                subtitle={`C++ TCP/UDP Networking Library • ${garnetStars} GitHub stars`}
                tags={["C++", "TCP/UDP", "POSIX", "Winsock", "Multithreading"]}
                desc={
                <>
                    Garnet is a small, cross-platform C++ networking library
                    providing both high-level server/client architecture and
                    low-level socket operations using TCP or UDP.
                    <br/><br/>
                    A multi-client TCP chat server with connection events and
                    broadcast messaging goes from ~700 lines of raw Windows/POSIX
                    code to ~120 lines of Garnet.
                </>
            }/>
            <Blurb id="blurb-card-plow" title="Plow n&#8217; Plate"
                subtitle="Farming/Cooking Game in Rust"
                tags={["Rust", "Bevy ECS", "Collaboration"]}
                links={[{ label: "View on GitHub", href: "https://github.com/jopo86/plow-n-plate" }]}
                desc={
                <>
                    A farming and cooking hybrid game prototyped with one
                    collaborator in Rust using the Bevy ECS engine &#x2014; my
                    first project in a newer language and paradigm outside C++,
                    and my first built alongside someone else.
                </>
            }/>
            <section id="experience">
                <h2>Experience</h2>
                <div className="exp-item">
                    <h3>Teaching Assistant<span className="when">2024 &#x2013; 2025</span></h3>
                    <p>
                        Designed 10+ assignments covering OOP, recursion, and data
                        structures, still in use today. Graded 100+ submissions and
                        frequently mentored struggling students one-on-one.
                    </p>
                </div>
                <div className="exp-item">
                    <h3>Connecticut Veterinary Center<span className="when">Jul 2024 &#x2013; Present</span></h3>
                    <p>
                        A primary point of contact for hundreds of clients daily,
                        managing scheduling, medication dispensing, and billing
                        inquiries under time pressure. 1,400+ hours total.
                    </p>
                </div>
            </section>
            <footer id="footer">
                <p>
                    Built with React &amp; Vite.&nbsp;
                    <a href="https://github.com/jopo86/portfolio" target="_blank" rel="noreferrer">
                        Source
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default HomePage;
