import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 text-center">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">JustEat</a>. All Rights Reserved.
                </span>
                <p className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Developed By <span className='text-green-400'>Ansari Sadaan</span></p>
            </div>
        </footer>

    )
}

export default Footer