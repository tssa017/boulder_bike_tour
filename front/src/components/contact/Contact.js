import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                    Contact Us
                </h1>
                <p className="text-3xl text-white mb-4">
                    Get in touch with us for inquiries and assistance
                </p>
                <p className="text-lg text-white mb-8">
                    {' '}
                    Get in touch with us for inquiries about eligibility, race
                    times, and anything else you need. Secure your spot today!
                </p>
            </div>

            <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Send us a message
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-lg text-gray-800 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-lg text-gray-800 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="col-span-2 mb-4">
                            <label
                                htmlFor="message"
                                className="block text-lg text-gray-800 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide transition duration-300 ease-in-out hover:bg-blue-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section
                id="contact-info"
                className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8 text-center"
            >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Contact Information
                    </h2>
                    <p className="text-lg text-white mb-4">
                        Need immediate assistance? Feel free to reach out to us
                        using the contact information below:
                    </p>
                    <div className="text-lg text-white">
                        <p>Email: info@boulderbiketour.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
