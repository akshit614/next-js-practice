import React from 'react'
import Button from './Button';

const Signin = () => {
    
    function onClick() {
        console.log("hiiii");
    }
  return (
    <div className="flex justify-center p-20">
            <div className="flex flex-col justify-center">
                <div className="block shadow-xl rounded-xl p-6 border hover:bg-gray-100">
                    <p className="font-extrabold text-3xl text-center">Signin</p>
                    <div className="flex flex-col p-1 mt-2">
                        <label htmlFor="" className="font-bold">Username</label>
                        <input className="border border-gray-400 rounded-md p-1 mt-2" placeholder="example@mail.com" type="text" />
                    </div>
                    <div className="flex flex-col p-1">
                        <label htmlFor="" className="font-bold">Password</label>
                        <input className="border border-gray-400 rounded-md p-1 mt-2" placeholder="abcd1234" type="text" />
                    </div>
                    <Button/>
                    {/* Button with onclick handler is not working beacause in Next.js everything is a server components and this is a client components so it is not working */}
                    {/* so we extract it in to a new component */}

                    {/* <div className="flex justify-center pt-4">
                        <button onClick={onClick} className="border p-1 px-4 rounded-full bg-gray-700 text-white font-bold text-xl hover:bg-black">SignIn</button>
                    </div> */}
                </div>
            </div>
        </div>
  )
}

export default Signin