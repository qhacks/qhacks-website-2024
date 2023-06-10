import PropTypes from 'prop-types';
import Image from 'next/image'

const TeamBubble = ({ teamMember }) => {
    const { name, role, image, linkedin, github, instagram, color } = teamMember;

    return (
        <div className='relative text-white border-2 p-4 w-80 h-80 rounded-full'>
            <Image height={150} width={150} src={image}></Image>
            <h3 className="text-center font-bold text-sm ">{name}</h3>
            <h5 className="text-center text-xs">{role}</h5>
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