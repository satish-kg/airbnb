import React from "react"

export default function Nav(){
    return(
        <div>
            <nav className="navbar">
                <img className="airbnb-logo" src="/airbnb-logo.png" />
                <div className="nav-text">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </div>
            </nav>
        </div>
    )
}