'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FAQDropdown = ({ faq }) => {
    const { question, answer } = faq;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative ">
            <button onClick={toggleDropdown} className="w-96 text-white hover:text-gray-500 font-medium text-md px-4 py-2.5 text-left inline-flex items-center">
                <p>{question}</p>
            </button>
            {isOpen && (
                <div className="w-96 mt-2 pt-2 pb-8 px-4 text-white">{answer}</div>
            )}
        </div>
    );
};

FAQDropdown.propTypes = {
    faq: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
};

export default FAQDropdown;
