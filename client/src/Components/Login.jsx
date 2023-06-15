import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export function Login() {
  const [click, setclick] = useState(false);
  const [loading ,setloading]= useState(false);
  const [email, setEmail] = useState("");
  const [otp, setotp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    const res = await fetch("https://testify101.vercel.app/api/route/sendotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    console.log(data); // console.log(data)
    console.log(res.status);
    if (res.status === 200) {
      setclick(true);
      alert(data.message);

      console.log(click);
    } else {
      window.alert("User Already Exists");
      navigate("/");
    }
  };

 
  
  const verifyotp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/route/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        email: email
      }),
    });
    const data = await res.json();
    console.log(data); // console.log(data)
    console.log(res.status);
    if (res.status === 200) {
      
      alert(data.message);
    } else {
      window.alert("wrong otp");
      
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 h-screen  sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">{/* logo here */}</div>
            <h2 className="text-center text-3xl font-bold leading-tight text-black">
              TesTify Api Key
            </h2>
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="userId"
                      id="Email"
                      value={email}
                      name="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className={click ? "" : "hidden"}>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      OTP{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="enter your otp"
                      id="otp"
                      name="otp"
                      onChange={(e) => setotp(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className={click ? "hidden" : ""}>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className={ loading? "hidden" : "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"}
                  >
                    Send OTP
                  </button>
                  <button
                    type="button"
                    className={ loading? "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" : "hidden" }
                  >Loading...
                  </button>
                </div>
                <div className={click ? "" : "hidden"}>
                  <button
                    onClick={verifyotp}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Verify otp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
