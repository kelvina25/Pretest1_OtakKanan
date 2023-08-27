"use client"
import React, { useState } from 'react'
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = () => {
  const [visible, setVisible] = useState(false)
  const [invisible, setInvisible] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row w-full md:w-2/3 max-w-4xl">
          <div className="w-full md:w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-orange-400 mb-2">
                Register Account
              </h2>
              <div className="border-2 w-20 border-orange-400 inline-block mb-2"></div>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                  <input type="password" name="password" placeholder="Name" className="bg-gray-100 outline-none text-sm flex-1"></input>
                </div>
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2 " />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"></input>
                </div>
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2 " />
                  <input type={visible ? "text" : "password"} name="password" placeholder="Password" className=" bg-gray-100 outline-none text-sm flex-1"></input>
                  <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
                    {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>

                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2 " />
                  <input type={invisible ? "text" : "password"} name="password" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1"></input>
                  <div className="cursor-pointer" onClick={() => setInvisible(!invisible)}>
                    {invisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>
                <a
                  href="register"
                  className="border-2 border-orange-400 text-orange-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-400 hover:text-white"
                >
                  Register
                </a>

              </div>


            </div>
          </div>

          <div className="w-full md:w-2/5 bg-orange-400 text-white rounded-tr-2xl rounded-2xl md:rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome Otak Kanan</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
            let&#39;s start your journey with us.
            </p>

            <a
              href="/"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-400"
            >
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register