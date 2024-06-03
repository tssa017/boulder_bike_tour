import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    APIProvider,
    Map,
    Marker,
    InfoWindow,
} from '@vis.gl/react-google-maps';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Location = () => {
    const [bikers, setBikers] = useState([]);
    const [selectedBiker, setSelectedBiker] = useState(null);

    useEffect(() => {
        const fetchBikers = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:3000/bikers'
                );
                const initialBikers = response.data.map((biker) => ({
                    ...biker,
                    // Transform data by adding a position property containing coordinates
                    position: { lat: biker.latitude, lng: biker.longitude },
                }));
                setBikers(initialBikers);
            } catch (error) {
                console.error('There was an error fetching the bikers!', error);
            }
        };

        // Calls fetchBikers function inside the useEffect hook to fetch bikers data when the component mounts
        fetchBikers();

        // Shows how the markers can move when db is updated 👼
        // Sets up a setInterval function inside another useEffect hook to periodically fetch updated bikers data every 2 seconds
        const interval = setInterval(async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:3000/bikers'
                );
                const updatedBikers = response.data.map((biker) => ({
                    ...biker,
                    // Simulate movement by updating bikers positions
                    position: {
                        lat: biker.latitude + (Math.random() - 0.5) * 0.001,
                        lng: biker.longitude + (Math.random() - 0.5) * 0.001,
                    },
                }));
                setBikers(updatedBikers);
            } catch (error) {
                console.error('There was an error fetching the bikers!', error);
            }
        }, 2000);

        // Prevent memory leak when component unmounts!
        return () => clearInterval(interval);
    }, []);

    return (
        <APIProvider apiKey={API_KEY} libraries={['marker']}>
            <Map
                mapId={'bf51a910020fa25a'}
                defaultZoom={12}
                defaultCenter={{ lat: 40.015, lng: -105.2705 }} // Coordinates for Boulder, Colorado
                gestureHandling={'greedy'}
                disableDefaultUI
                style={{ height: '100vh', width: '100%' }}
            >
                {bikers.map((biker) => (
                    <Marker
                        key={biker.id}
                        position={biker.position}
                        onClick={() => setSelectedBiker(biker)}
                    />
                ))}

                {selectedBiker && (
                    <InfoWindow
                        position={selectedBiker.position}
                        onCloseClick={() => setSelectedBiker(null)}
                    >
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {selectedBiker.first_name}{' '}
                                {selectedBiker.last_name}
                            </h2>
                            <div className="mt-4 flex justify-between items-center">
                                <button className="bg-pink-400 text-white text-lg py-2 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
                                    Send good vibes ✨
                                </button>
                            </div>
                        </div>
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    );
};

export default Location;
