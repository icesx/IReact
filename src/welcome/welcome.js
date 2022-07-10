import { Link } from "react-router-dom";

function Welcome(props) {
    return (
        <div>
            <h1>hello,{props.name}</h1>
            <div>
                <Link to='/game' >game</Link>
            </div>
            <div>
                <Link to='/search'>search</Link>
            </div>
            <div><Link to='usememo'>usermemo</Link></div>
            <div><Link to='/star'>star</Link></div>
            <div>
                <Link to='/redux'>redux</Link>
            </div>
            <div>
            <Link to='/redux_console'>redux console</Link>
            </div>
        </div>
    )
}
export default Welcome;