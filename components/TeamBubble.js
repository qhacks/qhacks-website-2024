"use client";
import PropTypes from 'prop-types';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import '../css/TeamBubble.css'

const TeamBubble = ({ teamMember }) => {
    const { name, role, image, linkedin, github, instagram, color } = teamMember;

    return (
        <div className={`team-bubble bubble-${color}`}>
                <div className='team-bubble-img-container'>
                    <Image 
                        id="team_image"
                        height={500} 
                        width={500} 
                        src={image} 
                        className='rounded-full w-28 h-28 team-bubble-img'
                    />
                </div>

                {/* <div className={`team-bubble-back`}>
                    <p className="text-white text-center font-bold text-sm">{name}</p>
                    <p className="text-white text-center text-xs">{role}</p>
                    <div className='flex flex-row justify-center'>
                        <a className='p-2' href={linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl" /></a>
                        <a className='p-2' href={instagram}><FontAwesomeIcon icon={faInstagram} className="text-white text-4xl" /></a>
                        <a className='p-2' href={github}><FontAwesomeIcon icon={faGithub} className="text-white text-4xl" /></a>
                    </div>
                </div> */}
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