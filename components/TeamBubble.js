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

    if (color == 'bg-red-500') {
        let color2 = 'bg-red-500';
      } else if (color == 'bg-yellow-300') {
        let color2 = 'bg-yellow-300';
      } else if (color == 'bg-blue-500') {
        let color2 = 'bg-blue-500';
      }

    return (
        <div className='flex w-28 h-28 m-2 md:m-5 '>
            <motion.div 
                className={`w-28 h-28 ${color} rounded-full`}
                whileHover={{
                    scale: 1.5,
                    zIndex: 10,
                }}
                
            >
                <div className='flex justify-center'>
                    <Image 
                        id="team_image"
                        height={500} 
                        width={500} 
                        src={image} 
                        onMouseOut={toggleInfoVisibility}
                        onMouseEnter={toggleInfoVisibility} 
                        className='rounded-full w-28 h-28 '
                    />
                </div>
                
                <AnimatePresence>
                    {isInfoVisible && (
                        <motion.div
                            initial={{ 
                                opacity: 0,
                                y: -40,
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{ 
                                opacity: 0,
                                y: -40, 
                            }}
                            className={`${color} rounded-full`}
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
            </motion.div>
            
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