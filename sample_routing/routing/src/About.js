import { Link } from "react-router-dom"

export  default function About(){
    return(
        <div>
            <h3>Welcome to about page!!!</h3>
            <p>
                Who are we??
            </p>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}