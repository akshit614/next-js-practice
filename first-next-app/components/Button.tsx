"use client"
import React from 'react'

const Button = () => {

    function onClick() {
        console.log("hiiii");
    }
  return (
    <div className="flex justify-center pt-4">
        <button onClick={onClick} className="border p-1 px-4 rounded-full bg-gray-700 text-white font-bold text-xl hover:bg-black">SignIn</button>
    </div>
  )
}

export default Button