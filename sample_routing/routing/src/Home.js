import { Link } from "react-router-dom"

export  default function Home(){
    return(
        <div>
            <h3>Welcome to home page!!!</h3>
            <p>
                **********Good Morning***********
            </p>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}