import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 40;

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    'https://api.flickr.com/services/rest',
                    {
                        params: {
                            method: 'flickr.photos.search',
                            api_key: apiKey,
                            tags: 'bikerace,BoulderBikeTour',
                            per_page: perPage,
                            page: page,
                            format: 'json',
                            nojsoncallback: 1,
                        },
                    }
                );

                if (response.data.photos && response.data.photos.photo) {
                    setPhotos(response.data.photos.photo);
                }
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                    Photo gallery
                </h2>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                    Discover the latest tagged photos 👀
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                alt={photo.title}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-lg font-extrabold text-gray-700 my-4">
                    Page {page}
                </p>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="bg-blue-600 text-white text-lg font-extrabold px-4 py-2 rounded-md mr-2 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNextPage}
                        className="bg-blue-600 text-white text-lg font-extrabold px-4 py-2 rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Photos;
