import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const FAQContent = ({ content }) => {
    return(
        <motion.div
            variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
            transition={{ duration: 0.4 }}
            className="mt-4 pt-2 pb-8 px-4 text-xl flex-1 text-white"
        >
            {content}
        </motion.div>
    )
};

FAQContent.propTypes = {
    faq: PropTypes.shape({
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default FAQContent;