import React from 'react'
import "../CSS/Footer.css"
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Footer() {
    const baseurl = "https://dev-feedmain.vercel.app/api";//baseurl for posting
    const [feedback, setfeedback] = useState("");
    const feedbackmain = () => {
        axios.post(baseurl + "/feedback", {

            feedback: feedback

        }).then((Response) => {
            if (Response.status === 200) {

                alert(Response.data.message);


                console.log("success");

            }
            console.log(Response);
        })

    }
    function scrollToAbout() {
        var element = document.getElementById("about");
        element.scrollIntoView();
    }


    function scrollToSubs() {
        var element = document.getElementById("subscribe-con");
        element.scrollIntoView();
    }

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


    return (
        <>
            <div className='flex flex-col w-screen justify-center bg-[ #f8f7f1] items-center sans-serif  pt-[5vh] pb-[7vh]'>
                <div className='text-black title items-center sans-serif  font-bold'>Reach out to us</div>
                <div className='text-black text-xl mx-4 items-center text-center  pt-1 pb-3 xsm:text-base xssm:text-xs'>Welcome to Testify, the ultimate solution for effortless unit testing. Testify is a user-friendly API website designed to generate comprehensive unit testing data for your projects with just a simple GET request. Say goodbye to the tedious process of importing and managing packages for testing purposes. With Testify, you can streamline your development process and ensure the quality and reliability of your code without any hassle.</div>

                <div className='flex flex-row justify-between'>
                <Link to='/docs'>       <button type="submit" className='button'  ><span className='buttontext'>Get Started Here</span></button></Link>
                       
                      
                </div>
            </div>



            <div className="footer">
                    {/* <ul className='footer-list'>
                        <li><p className="footer-items" onClick={scrollToAbout}>Github</p></li>
                        <li><p className="footer-items"><a href="mailto:devfeed.in@gmail.com">Contact</a></p></li>
                        <li><p className='footer-items' onClick={scrollToSubs}>Documentation</p></li>
                    </ul> */}
                <div className="copyright">&copy; Copyright {getCurrentYear()} by Testify. All rights reserved.</div>
            </div>
        </>
    )
}
