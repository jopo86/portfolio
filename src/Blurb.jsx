import Icon from "./Icon";
import { Link } from 'react-router-dom';

function Blurb(props) {

    return (
        <div className="blurb-card" id={props.id}>
            <h2 className="title">{props.title}<Link className="go" to={props.link}>{props.icon && <>&nbsp;&nbsp;<Icon name="arrow_forward" /></>}</Link></h2>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default Blurb;
