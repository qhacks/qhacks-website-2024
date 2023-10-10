import TeamBubble from "./TeamBubble";
import team from "../data/team";

const TeamSection = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center">
			<TeamBubble teamMember={team.EricMedina} />
			<TeamBubble teamMember={team.DominiqueMercier} />
			<TeamBubble teamMember={team.JeremySelwin}/>
			<TeamBubble teamMember={team.MonicaStef} />
			<TeamBubble teamMember={team.EthanWang} />
			<TeamBubble teamMember={team.LacshmiGaneshananda}/>
			<TeamBubble teamMember={team.EricaFry}/>
			<TeamBubble teamMember={team.MichaelaLi}/>
			<TeamBubble teamMember={team.MayaGoodman}/>
			<TeamBubble teamMember={team.NicholasLykopoulos}/>
			<TeamBubble teamMember={team.EthanChin}/>
			<TeamBubble teamMember={team.JoashMathew} />
			<TeamBubble teamMember={team.SchuylerGood} />
			<TeamBubble teamMember={team.StefanPitigoi}/>
			<TeamBubble teamMember={team.JacobTepperman}/>
			<TeamBubble teamMember={team.CalvinZheng} />
			<TeamBubble teamMember={team.EricLam}/>
			<TeamBubble teamMember={team.MatangyKanesamoorthy}/>
			<TeamBubble teamMember={team.AdamRaco}/>
			<TeamBubble teamMember={team.OliviaStewart}/>
			<TeamBubble teamMember={team.NoahSerhan}/>
			<TeamBubble teamMember={team.AdiGroumoutis}/>
			<TeamBubble teamMember={team.IlyasErdogan} />
			<TeamBubble teamMember={team.AndrewTerry} />
			<TeamBubble teamMember={team.MichaelKwon}/>
			<TeamBubble teamMember={team.AnaCoelho}/>
			<TeamBubble teamMember={team.EdwardTanurkov}/>
			<TeamBubble teamMember={team.EricLee}/>
			<TeamBubble teamMember={team.NavyaBajwa}/>
		</div>
    );
}

export default TeamSection;