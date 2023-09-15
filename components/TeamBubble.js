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
                    <Image width={112} height={112} id='team_image' src={image} className="rounded-full w-28 h-28 team-bubble-img"/>
                </div>

                <div className={`team-bubble-back`}>
                        <div className='team-bubble-name'>{name}</div>
                        <div className='team-bubble-role'>{role}</div>
                    <div className='team-bubble-button-container'>
                        {/* <a href={linkedin}><FontAwesomeIcon className='team-bubble-button' icon={faLinkedin} /></a>
                        <a href={instagram}><FontAwesomeIcon className='team-bubble-button' icon={faInstagram} /></a>
                        <a href={github}><FontAwesomeIcon className='team-bubble-button' icon={faGithub} /></a> */}
                        {linkedin !== null ? (
                        <a href={linkedin}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faLinkedin} />
                        </a>
                        ) : null}

                        {instagram !== null ? (
                        <a href={instagram}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faInstagram} />
                        </a>
                        ) : null}

                        {github !== null ? (
                        <a href={github}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faGithub} />
                        </a>
                        ) : null}
                    </div>
                </div>
            </div>
            
    );
};

TeamBubble.propTypes = {
    teamMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        linkedin: PropTypes.string,
        github: PropTypes.string,
        instagram: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
  };

export default TeamBubble;