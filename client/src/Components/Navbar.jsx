import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav-body">
            <a href="#home">
            <Link to='/'> <div className="logo">
                    <img
                        src={require("../Assets/TesTify.png")}
                        alt=""
                        id="nav-logo"
                    />
                </div></Link> 
            </a>
            <div className="flex ">
                <a href="">
                <Link to='/login'>      <div className="subscribe font-medium ">
                         Get Your Api Key Here
                        {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                    </div></Link>

                </a>
                <Link to="/login">
                    <div className="subscribe font-medium login ">
                        Login
                        {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                    </div>

                </Link>
            </div>

        </div>
    );
}
