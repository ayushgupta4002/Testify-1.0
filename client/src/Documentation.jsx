import "./CSS/Documentation.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <>
      <div className="">
        <div className="flex flex-start"></div>
        <Navbar />
        <div className="flex flex-row ">
          <div className="h-10 mt-[12vh] w-[15vw] flex-col justfiy-around">
            <div className="text-xl h-[7vh] hover:bg-gray-100	 cursor-pointer pl-5 pt-2	">
              Documentation
            </div>
          </div>
          <div class="h-[100vh] min-h-[1em]  w-[0.12vw] bg-gradient-to-tr from-transparent via-neutral-800  opacity-20 dark:opacity-200"></div>
          <div className="h-10 mt-[14vh] w-[65vw]">
            <div className="flex flex-col">
              {/* <div className="h-[5vh] ">
  <Link to='/'>Home</Link>>Documentation 
</div> */}

            </div>
          </div>
          <div class="h-[100vh] min-h-[1em]  w-[0.12vw] bg-gradient-to-tr from-transparent via-neutral-800  opacity-20 dark:opacity-200"></div>
          <div className="h-10 mt-[14vh] w-[20vw]">hi</div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
