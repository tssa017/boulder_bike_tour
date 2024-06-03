import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-3xl text-white mb-8">
                    Discover the journey behind the event 🚴‍♂️
                </p>
            </div>

            <section id="history" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Our history
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Boulder Bike Tour started over a decade ago with a
                        small group of enthusiastic cyclists. Today, it has
                        grown into one of the most anticipated cycling events in
                        Colorado, attracting riders from all over the globe. The
                        tour offers a unique opportunity to experience the
                        breathtaking landscapes of Boulder, while promoting a
                        sense of community and sportsmanship.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Each year, the tour has evolved, introducing new routes
                        and challenges, while maintaining the core spirit of
                        adventure and camaraderie. We are proud of our rich
                        history and the countless memories made along the way.
                    </p>
                </div>
            </section>

            <section
                className="py-16 px-4 sm:px-6 lg:px-8"
                style={{
                    background:
                        "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('bike-race.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60vh',
                }}
            >
                <p className="text-4xl font-extrabold text-yellow-300 m-12">
                    #BIKEBOULDER
                </p>
            </section>
        </div>
    );
};

export default About;
