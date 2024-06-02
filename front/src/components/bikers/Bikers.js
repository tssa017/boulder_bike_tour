import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bikers = () => {
    const [bikers, setBikers] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:3000/bikers')
            .then((response) => {
                setBikers(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the bikers!', error);
            });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                    Meet this year's competitors 🔥
                </h1>
            </div>

            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {bikers.map((biker) => (
                        <div
                            key={biker.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105"
                        >
                            <div className="bg-gray-800 text-white px-4 py-2">
                                <h3 className="text-xl font-semibold">
                                    {biker.first_name} {biker.last_name}
                                </h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600">
                                    {biker.city_of_origin},{' '}
                                    {biker.state_of_origin}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bikers;
