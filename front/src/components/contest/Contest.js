import React from 'react';
import Form from '../form/Form';

const Contest = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                    Enter the Contest!
                </h1>
                <p className="text-3xl text-white mb-8">
                    Submit your slogan idea and be in to win 🏆
                </p>
            </div>

            <section id="contest-form" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Submit your slogan idea here 💭
                    </h2>
                    <Form />
                </div>
            </section>
        </div>
    );
};

export default Contest;
