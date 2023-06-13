'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";

const FAQDropdown = ({ faq }) => {
    const { question, answer } = faq;
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-left p-2">
            <button onClick={toggleDropdown} className="
                text-white 
                font-medium
                text-2xl
                py-2.5
                text-left
                hover:text-gray-500"
            >
                {question}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="w-3/5 mt-4 pt-2 pb-8 px-4 text-xl"
                        initial={{ 
                                opacity: 0,
                                y: -40,
                            }}
                            animate={{ 
                                opacity: 1,
                                color: 'gray',
                                y: 0,
                            }}
                            exit={{ 
                                opacity: 0,
                                y: -40, 
                            }}
                    >{answer}</motion.div>
                )}
            </AnimatePresence>
            
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
