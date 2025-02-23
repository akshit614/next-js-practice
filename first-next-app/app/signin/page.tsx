const Signin = () => {
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-sm block shadow-xl rounded-xl p-6 border hover:bg-gray-100">
                    <p className="font-extrabold text-3xl text-center">Signin</p>
                    <div className="flex flex-col p-1 mt-2">
                        <label htmlFor="" className="font-bold">Username</label>
                        <input className="border border-gray-400 rounded-md p-1 mt-2" placeholder="example@mail.com" type="text" />
                    </div>
                    <div className="flex flex-col p-1">
                        <label htmlFor="" className="font-bold">Password</label>
                        <input className="border border-gray-400 rounded-md p-1 mt-2" placeholder="abcd1234" type="text" />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button className="border p-1 px-4 rounded-full bg-gray-700 text-white font-bold text-xl hover:bg-black">SignIn</button>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Signin;