import React from 'react'
import "../CSS/Hero.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='hero' id='home'>
            <div className="hero-data">
                <div className="hero-head">
                    Testify
                </div>
                <div className="hero-text">
                    <span className='text-[#28004d] comme'>Welcome to Testify, the ultimate solution for effortless unit testing.</span> 
                </div>
            </div>
            <div className="hero-image nm:hidden">
                <img src={require("../Assets/home.png")}  data-aor-once="true" alt="" className='hero-img' />
            </div>
        </div>
    )
}
