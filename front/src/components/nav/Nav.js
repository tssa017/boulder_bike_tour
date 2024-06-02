import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white text-lg font-bold">
                    Boulder Bike Tour
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-400 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${
                        isOpen ? 'flex' : 'hidden'
                    }`}
                >
                    <Link
                        to="/about"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        About
                    </Link>
                    <Link
                        to="/photos"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Photos
                    </Link>
                    <Link
                        to="/bikers"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Bikers
                    </Link>
                    <Link
                        to="/contest"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Contest
                    </Link>
                    <Link
                        to="/media"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Media
                    </Link>
                    <Link
                        to="/contact"
                        className="current text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
