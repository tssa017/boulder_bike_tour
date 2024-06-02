import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                    Welcome to the Boulder Bike Tour
                </h1>
                <p className="text-3xl text-white mb-8">
                    Colorado's premier cycling event 💪
                </p>
                <Link
                    to="#"
                    className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white py-2 px-6 rounded-full font-semibold uppercase tracking-wide transition duration-300 ease-in-out"
                >
                    Register now
                </Link>
            </div>

            <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        About the event
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Boulder Bike Tour is an annual cycling event that
                        takes place in beautiful Boulder, Colorado. Riders from
                        around the world come together to experience the
                        stunning scenery, challenging routes, and vibrant
                        cycling community that Boulder has to offer.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you're a seasoned cyclist looking for a new
                        challenge or a beginner wanting to experience the thrill
                        of a bike race, the Boulder Bike Tour has something for
                        everyone.
                    </p>
                </div>
            </section>

            <section
                id="register"
                className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8 text-center"
            >
                <div className="max-w-3xl mx-auto">
                    <Link
                        to="/contact"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
                    >
                        Register now
                    </Link>
                    <p className="text-lg text-white m-6">
                        Contact us to check your eligibility for this year's
                        race.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white py-3 px-8 rounded-full font-semibold uppercase tracking-wide transition duration-300 ease-in-out"
                    >
                        Register now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
