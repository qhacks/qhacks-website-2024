import sponsorsJSON from "../data/sponsors.json";
import SponsorCard from "./SponsorCard";
import PreviousSponsorCard from "./PreviousSponsorCard";
import PartneringCard from "./PartneringCard";

const SponsorSection = () => {
    return(
        <div>
            <h1 className="text-white text-center text-3xl md:text-5xl font-bold mb-4">
                Thanks To Our{" "}
                <span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                    Current Sponsors.
                </span>
            </h1>
            <div className="pb-16">
                {/*For Tera Sponsors*/}
                <div className="flex justify-center flex-row flex-wrap items-center justify-center w-full">
                    <SponsorCard sponsor={sponsorsJSON.nationalBank} />
                </div>

                {/*Add Giga Sponsors here*/}
                <div className="flex justify-center flex-row flex-wrap items-center justify-center w-full">

                </div>

                {/*For Mega Sponsors*/}
                <div className="flex justify-center flex-row flex-wrap items-center justify-center w-full">
                    <SponsorCard sponsor={sponsorsJSON.manulife} />
                </div>

                {/*For Kilo Sponsors*/}
                <div className="flex justify-center flex-row flex-wrap items-center justify-center w-full">
                    <SponsorCard sponsor={sponsorsJSON.kenworth} />
                    <SponsorCard sponsor={sponsorsJSON.kingston} />
                    <SponsorCard sponsor={sponsorsJSON.otpp} />
                    <SponsorCard sponsor={sponsorsJSON.queensComputing} />
                    <SponsorCard sponsor={sponsorsJSON.ece} />
                    {/* <SponsorCard sponsor={sponsorsJSON.redbull} /> */}
                    <SponsorCard sponsor={sponsorsJSON.cpp} />
                    <SponsorCard sponsor={sponsorsJSON.campusBookStore} />
                    <SponsorCard sponsor={sponsorsJSON.scorePizza} />
                    <SponsorCard sponsor={sponsorsJSON.systemx} />
                    <SponsorCard sponsor={sponsorsJSON.standOutStickers} />
                    <SponsorCard sponsor={sponsorsJSON.pinnacle} />
                </div>
            </div>

            <h1 className="text-white text-center text-3xl md:text-5xl font-bold mb-4">
                Some of Our{" "}
                <span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                    Past Sponsors.
                </span>
            </h1>
            <div className="flex justify-center">
                <div
                    className="flex flex-row flex-wrap items-center justify-center w-full"
                >
                    <PreviousSponsorCard sponsor={sponsorsJSON.assemblyAI} />
                    {/* <SponsorCard sponsor={sponsorsJSON.axure} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.bounce} />
                    {/* <SponsorCard sponsor={sponsorsJSON.codology} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.convictional} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.gameloft} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.github} />
                    {/* <SponsorCard sponsor={sponsorsJSON.leadingLearners} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.mosaic} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.pwc} />
                    {/* <SponsorCard sponsor={sponsorsJSON.sleek} /> */}
                    {/* <SponsorCard sponsor={sponsorsJSON.taskade} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.whoosh} />
                    {/* <SponsorCard sponsor={sponsorsJSON.wolfram} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.amazon} />
                    {/* <SponsorCard sponsor={sponsorsJSON.dominoes} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.kingstonUtilities} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.voiceflow} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.amd} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.bmo} />
                    {/* <SponsorCard sponsor={sponsorsJSON.echo} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.ibm} />
                    {/* <SponsorCard sponsor={sponsorsJSON.kbc} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.mapbox} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.mars} />
                    <PreviousSponsorCard sponsor={sponsorsJSON.scotiabank} />
                    {/* <SponsorCard sponsor={sponsorsJSON.smileCDR} /> */}
                    <PreviousSponsorCard sponsor={sponsorsJSON.stanAI} />
                </div>
            </div>
            <div id="sponsor-link" className="flex justify-center items-center mt-8 2xl:mt-40">
                <PartneringCard />
            </div>
        </div>
    );
};

export default SponsorSection;