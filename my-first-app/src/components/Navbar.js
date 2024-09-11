import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import EmailRounded from "@mui/icons-material/EmailRounded";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div fixed="top" className="navbar">
            <div className="section">
                <div className="container">
                    <div className="icons">
                        <div className="my-name">Parijat Purohit</div>
                        <div><a href="#intro">Intro</a></div>
                        <div><a href="#about">About</a></div>
                        <div><a href="#experience">Experience</a></div>
                        <div><a href="#contact">Say Hello</a></div>
                    </div>
                    <div className="links">
                        <div onClick={() => window.open("https://github.com/parijat-purohit", "_blank")}>
                            <GitHub />
                        </div>
                        <div onClick={() => window.open("mailto:parijat2009@gmail.com", "_blank")}>
                            <EmailRounded />
                        </div>
                        <div onClick={() => window.open("https://www.linkedin.com/in/parijat-prashun-purohit-17bab9120/", "_blank")}>
                            <LinkedIn />
                        </div>
                        <div onClick={() => window.open("https://medium.com/@parijat2009", "_blank")}>
                            <BorderColorIcon />
                        </div>
</div>

                </div>
            </div>          
        </div>
    )
}
export default Navbar;