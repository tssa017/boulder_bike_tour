import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-3xl text-white mb-8">
                    Discover the journey and the community behind the event 🚴‍♂️
                </p>
            </div>

            <section id="history" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Our History
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
                id="experience"
                className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center"
            >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                        The Experience
                    </h2>
                    <p className="text-lg text-white mb-8">
                        Participants can expect a well-organized event, with
                        routes that cater to all levels of cyclists. From scenic
                        paths to challenging climbs, the Boulder Bike Tour
                        provides a diverse and rewarding experience. Our
                        dedicated team ensures safety, support, and a memorable
                        adventure for every rider.
                    </p>
                </div>
            </section>

            <section id="community" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Join Our Community
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Beyond the ride, the Boulder Bike Tour fosters a vibrant
                        community of cycling enthusiasts. Throughout the year,
                        we host events, training rides, and social gatherings to
                        keep the spirit of cycling alive and thriving.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Stay connected with fellow riders, share your
                        experiences, and celebrate the love of cycling with us.
                        Follow us on social media and join our mailing list to
                        stay updated on the latest news and events.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
