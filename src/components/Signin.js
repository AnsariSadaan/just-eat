import React, { useState } from 'react'

const Signin = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const inputCss = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm);
    }



    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<div className="mb-4">
                    <input className={inputCss} type="text" placeholder="Full Name" />
                </div>)}
                <div className="mb-4">
                    <input className={inputCss} type="email" placeholder="Email Address" />
                </div>
                <div className="mb-4">
                    <input className={inputCss} type="password" placeholder="Password" />
                </div>
                <p className="text-red-500 text-xs italic mb-4">message</p>
                <button className="bg-green-500 hover:bg-green-600 w-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-gray-600 text-xs mt-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To JustEats? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>

    )
}

export default Signin