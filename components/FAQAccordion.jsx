'use client';
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";
import FAQContent from "./FAQContent";

const FAQAccordion = ({ faq }) => {
    const {question,answer} = faq;
    const [isExpanded, setExpanded] = useState(false);
    return (
        <div>
            <motion.h1
                initial={false}
                animate={{color: isExpanded ? "#FBBF24" : "#ffffff"}}
                onClick={() => setExpanded(!isExpanded)}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="text-white font-medium text-2xl py-2.5 text-left flex hover:text-gray-500 hover:cursor-pointer"
            >
                {question}
            </motion.h1>
            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <FAQContent content={answer}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

FAQAccordion.propTypes = {
    faq: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
};

export default FAQAccordion;