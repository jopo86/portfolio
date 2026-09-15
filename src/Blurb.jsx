import Icon from "./Icon";
import { Link } from 'react-router-dom';

function Blurb(props) {

    return (
        <div className="blurb-card" id={props.id}>
            <h2 className="title">{props.title}{props.link && <Link className="go" to={props.link}>{props.icon && <>&nbsp;&nbsp;<Icon name="arrow_forward" /></>}</Link>}</h2>
            {props.subtitle && <p className="subtitle">{props.subtitle}</p>}
            <p className="desc">{props.desc}</p>
            {props.tags && (
                <ul className="tags">
                    {props.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            )}
            {props.links && (
                <p className="card-links">
                    {props.links.map((l, i) => (
                        <span key={l.href}>
                            {i > 0 && <span className="sep">&nbsp;/&nbsp;</span>}
                            <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                        </span>
                    ))}
                </p>
            )}
        </div>
    )
}

export default Blurb;
