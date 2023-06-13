"use client";
import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const TeamBubble = ({ teamMember }) => {
    const { name, role, image, linkedin, github, instagram, color } = teamMember;
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfoVisibility = () => {
        setIsInfoVisible(!isInfoVisible);
    };


    return (
        <div className='
            w-40 
            h-40 
            rounded-full
        '>
            <motion.div 
                className='w-40 h-40 rounded-full'
                whileHover={{
                    scale: 1.3,
                    zIndex: 10,
                }}
            >
                <Image 
                    id="team_image"
                    height={500} 
                    width={500} 
                    src={image} 
                    onMouseOut={toggleInfoVisibility}
                    onMouseEnter={toggleInfoVisibility} 
                    className='rounded-full w-28 h-28'
                />
            </motion.div>
                <AnimatePresence>
                    {isInfoVisible && (
                        <motion.div
                            initial={{ 
                                opacity: 0,
                                y: -40,
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 40,
                            }}
                            exit={{ 
                                opacity: 0,
                                y: -40, 
                            }}
                        >
                            <p className="text-white text-center font-bold text-sm">{name}</p>
                            <p className="text-white text-center text-xs">{role}</p>
                            <div className='flex flex-row justify-center'>
                                <a className='p-2' href={linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl" /></a>
                                <a className='p-2' href={instagram}><FontAwesomeIcon icon={faInstagram} className="text-white text-4xl" /></a>
                                <a className='p-2' href={github}><FontAwesomeIcon icon={faGithub} className="text-white text-4xl" /></a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            
        </div>
    );
};

TeamBubble.propTypes = {
    teamMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        instagram: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
  };

export default TeamBubble;