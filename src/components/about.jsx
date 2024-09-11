import { Link } from "next/link"

function About(){
    return (
        <h1 className="about">
            About
            <Link href={"/"}>Home</Link>
        </h1>
    )
}

export default About