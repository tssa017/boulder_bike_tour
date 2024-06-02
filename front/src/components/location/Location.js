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
        axios
            .get('http://127.0.0.1:3000/bikers')
            .then((response) => {
                const initialBikers = response.data.map((biker) => ({
                    ...biker,
                    position: { lat: biker.latitude, lng: biker.longitude },
                }));
                setBikers(initialBikers);
            })
            .catch((error) => {
                console.error('There was an error fetching the bikers!', error);
            });

        // Shows how the markers can move - ideally would update with API call 👼
        // const interval = setInterval(() => {
        //     setBikers((prevBikers) =>
        //         prevBikers.map((biker) => ({
        //             ...biker,
        //             position: {
        //                 lat: biker.position.lat + (Math.random() - 0.5) * 0.001,
        //                 lng: biker.position.lng + (Math.random() - 0.5) * 0.001,
        //             },
        //         }))
        //     );
        // }, 2000);

        // return () => clearInterval(interval);
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
                        <div>
                            <h2>
                                {selectedBiker.first_name}{' '}
                                {selectedBiker.last_name}
                            </h2>
                        </div>
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    );
};

export default Location;
