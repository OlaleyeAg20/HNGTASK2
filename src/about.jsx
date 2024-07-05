import { Link } from "react-router-dom"

function About(){
    return (
        <h1 className="about">
            About
            <Link to={"/"}>Home</Link>
        </h1>
    )
}

export default About