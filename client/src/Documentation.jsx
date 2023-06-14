import "./CSS/Documentation.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import Docmain from "./Components/Docmain";

function Documentation() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
};
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className="flex flex-start"></div>
        <Navbar />
        <div className="flex flex-row ">
          <div className="h-10 mt-[12vh] w-[15vw] flex-col justfiy-around p-2">
            <div className="text-lg font-medium  rounded-md h-[7vh] bg-gray-100	 cursor-pointer pl-5 pt-2	text-blue-500">
              Documentation
            </div>
          </div>
          <div class="h-[670vh] min-h-[1em]  w-[0.12vw] bg-gradient-to-tr from-transparent via-neutral-800  opacity-20 dark:opacity-200"></div>
          <div className="h-10 mt-[14vh] xllg:w-[80vw] w-[70vw]">
            <div className="flex flex-col">
            <Docmain/>
                        </div>
          </div>
          <div class="h-[100vh] min-h-[1em]  w-[0.12vw] xllg:hidden bg-gradient-to-tr from-transparent via-neutral-800  opacity-20 dark:opacity-200"></div>
          <div className="h-10 xllg:hidden mt-[14vh] w-[15vw]">hi</div>
        </div>
        <div className="footer">
                    {/* <ul className='footer-list'>
                        <li><p className="footer-items" onClick={scrollToAbout}>Github</p></li>
                        <li><p className="footer-items"><a href="mailto:devfeed.in@gmail.com">Contact</a></p></li>
                        <li><p className='footer-items' onClick={scrollToSubs}>Documentation</p></li>
                    </ul> */}
                <div className="copyright">&copy; Copyright {getCurrentYear()} by Testify. All rights reserved.</div>
            </div>
      </div>
 
    </>
  );
}

export default Documentation;
