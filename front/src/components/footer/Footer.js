import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-white"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
