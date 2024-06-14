import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const Form = () => {
    // `formData` holds the values of the form fields, `errors` holds any validation errors
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        slogan_idea: '',
    });
    const [errors, setErrors] = useState({});

    // Initialise modal states
    // Control whether the modal is displayed or not
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Store the message that will be shown inside the modal
    const [modalMessage, setModalMessage] = useState('');

    // Updates the form data state, clears error messages for field being edited
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
    };

    // Regex to match against conventional email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {}; // Store errors

        if (!formData.first_name) {
            // If no first name value present, set error message to display and prevent form submission
            newErrors.first_name = 'First name is required';
            valid = false;
        }

        if (!formData.last_name) {
            newErrors.last_name = 'Last name is required';
            valid = false;
        }

        if (!formData.email_address) {
            newErrors.email_address = 'Email address is required';
            valid = false;
            // Check if the format is valid using validateEmail
        } else if (!validateEmail(formData.email_address)) {
            newErrors.email_address = 'Email address is not valid';
            valid = false;
        }

        if (!formData.slogan_idea) {
            newErrors.slogan_idea = 'Slogan is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        // Prevent page reload on submit
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/slogan_submissions`, {
                slogan_submission: formData,
            });
            console.log('Submission successful!', response.data);
            setFormData({
                first_name: '',
                last_name: '',
                email_address: '',
                slogan_idea: '',
            });
            setModalMessage('Your slogan has been successfully submitted!');
            // Open the modal with appropriate message!
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
                        aria-required="true"
                    />
                    {errors.first_name && ( // This is a conditional ternary operator, like an if... else statement but refactored 🧹 it evaluates to true, and the <span> element is rendered. If errors.first_name is null or undefined, it evaluates to false, and nothing is rendered
                        <span className="text-red-500 text-sm">
                            {errors.first_name}
                        </span>
                    )}
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
                        aria-required="true"
                    />
                    {errors.last_name && (
                        <span className="text-red-500 text-sm">
                            {errors.last_name}
                        </span>
                    )}
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
                        aria-required="true"
                    />
                    {errors.email_address && (
                        <span className="text-red-500 text-sm">
                            {errors.email_address}
                        </span>
                    )}
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
                        aria-required="true"
                    />
                    {errors.slogan_idea && (
                        <span className="text-red-500 text-sm">
                            {errors.slogan_idea}
                        </span>
                    )}
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
                            onClick={closeModal} // When a user clicks the close modal button, actually close the modal
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
