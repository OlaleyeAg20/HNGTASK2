import { Link } from "next/link"


function NotFound(){
    return(
        <div className="not-found">
            <h1>404 Error! Page Not Found</h1>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default NotFound