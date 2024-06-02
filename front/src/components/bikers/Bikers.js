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
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Bikers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bikers.map((biker) => (
                    <div
                        key={biker.id}
                        className="bg-white shadow-md rounded-lg p-4"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            {biker.first_name} {biker.last_name}
                        </h3>
                        <p className="text-gray-600">
                            City: {biker.city_of_origin}
                        </p>
                        <p className="text-gray-600">
                            State: {biker.state_of_origin}
                        </p>
                        <p className="text-gray-600">
                            Latitude: {biker.latitude}
                        </p>
                        <p className="text-gray-600">
                            Longitude: {biker.longitude}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bikers;
