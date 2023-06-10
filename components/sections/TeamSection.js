import TeamBubble from "../TeamBubble";

const team = {
    Sky:{
        name: "Sky Good",
        role: "Tech Director",
        image: "/Dixon.png",
        linkedin: "",
        github: "",
        instagram: "",
        color:"red-500",
    },
    Eric:{
        name: "Eric Zhang",
        role: "Tech Director",
        image: "/Dixon.png",
        linkedin: "",
        github: "",
        instagram: "",
        color:"yellow-300",
    },
    Joash:{
        name: "Joash Naidoo",
        role: "Tech Director",
        image: "/Dixon.png",
        linkedin: "",
        github: "",
        instagram: "",
        color:"blue-500",
    },
};

const TeamSection = () => {

    return(
        <div className="flex justify-center">
            <TeamBubble teamMember={team.Sky}/>
            <TeamBubble teamMember={team.Eric}/>
            <TeamBubble teamMember={team.Joash}/>
        </div>
    );
};

export default TeamSection;