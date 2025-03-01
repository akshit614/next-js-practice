"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function Signup() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();
    return (
        <div className="flex flex-col justify-center h-screen ">
            <div className="flex  justify-center">
                <div className="max-w-sm border shadow-lg rounded-xl p-2 m-4">

                <p className="p-4 font-extrabold text-3xl text-center">Signup</p>
                <div className="flex flex-col p-2">
                    <label className="font-bold" htmlFor="">Username</label>
                    <input  onChange={(e) => {
                        setUsername(e.target.value)
                    }}   className="border rounded-md px-1" type="text"  placeholder="Username"/>
                </div>
                <div className="flex flex-col p-2">
                    <label className="font-bold" htmlFor="">Password</label>
                    <input  onChange={(e) => {
                        setPassword(e.target.value)
                    }}   className="border rounded-md px-1" type="password"  placeholder="assword"/>
                </div>

                <div className="pt-4 pb-4 text-center">
                    <button onClick={async () => {
                        await axios.post("http://localhost:3000/api/user", {
                            username,
                            password
                        })
                        router.push("/")
                    }} className="border-4 p-1 px-5 rounded-full font-bold hover:bg-black hover:text-white hover:border-black transition-all">SignUp</button>
                </div>
                </div>
            </div>
        </div>
    )
}