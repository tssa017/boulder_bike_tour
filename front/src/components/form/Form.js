import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        slogan_idea: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/slogan_submissions',
                {
                    slogan_submission: formData,
                }
            );
            console.log('Submission successful!', response.data);
            setFormData({
                first_name: '',
                last_name: '',
                email_address: '',
                slogan_idea: '',
            });
            setModalMessage('Your slogan has been successfully submitted!');
            setIsModalOpen(true);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            if (error.response && error.response.data) {
                setModalMessage(
                    `Error: ${JSON.stringify(error.response.data)}`
                );
            } else {
                setModalMessage(
                    'There was an error submitting the form. Please try again.'
                );
            }
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="first_name"
                        className="block text-sm font-semibold"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="my-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="last_name"
                        className="block text-sm font-semibold"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="my-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email_address"
                        className="block text-sm font-semibold"
                    >
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email_address"
                        name="email_address"
                        value={formData.email_address}
                        onChange={handleChange}
                        className="my-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="slogan_idea"
                        className="block text-sm font-semibold"
                    >
                        Slogan
                    </label>
                    <input
                        type="text"
                        id="slogan_idea"
                        name="slogan_idea"
                        value={formData.slogan_idea}
                        onChange={handleChange}
                        maxLength={50}
                        className="my-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        aria-label="Submit your slogan"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md shadow-md max-w-sm mx-auto">
                        <h2 className="text-lg font-semibold mb-4">
                            Submission Status
                        </h2>
                        <p className="mb-4">{modalMessage}</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
