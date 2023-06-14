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
        <div className="flex flex-row  h-screen ">
          <div className="h-10 fixed mt-[12vh]   xmd:hidden  w-[15vw] flex-col justfiy-around p-2">
            <div className="text-lg font-medium xmd:hidden  rounded-md h-[7vh] bg-gray-100	 cursor-pointer pl-5 pt-2	text-blue-500">
              Documentation
            </div>
          </div>
          <div  class="h-screen ml-[16%] fixed xmd:hidden  w-[0.12vw] bg-gradient-to-tr from-transparent via-neutral-800  opacity-20 dark:opacity-200"></div>
          <div className="h-10 mt-[14vh] ml-[15%] xmd:ml-[5%]  xmd:w-[90vw]   xllg:w-[80vw] w-[66vw]">
            <div className="flex flex-col">
              <Docmain />
            </div>
          </div>
          <div className="flex xllg:hidden fixed ml-[80%] flex-row">
            <div class="inline-block h-[400px] min-h-[1em] w-0.5 self-stretch bg-gray-100	bg-neutral-300 opacity-200 dark:opacity-200"></div>
            <div className="h-10 ml-[6%]  mt-[14vh] w-[19vw]">
              /to be revealed/
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
