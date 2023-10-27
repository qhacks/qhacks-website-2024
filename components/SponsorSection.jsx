import sponsorsJSON from "../data/sponsors.json";
import SponsorCard from "./SponsorCard";
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
                    <SponsorCard sponsor={sponsorsJSON.redbull} />
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
                    <SponsorCard sponsor={sponsorsJSON.assemblyAI} />
                    {/* <SponsorCard sponsor={sponsorsJSON.axure} /> */}
                    <SponsorCard sponsor={sponsorsJSON.bounce} />
                    {/* <SponsorCard sponsor={sponsorsJSON.codology} /> */}
                    <SponsorCard sponsor={sponsorsJSON.convictional} />
                    <SponsorCard sponsor={sponsorsJSON.gameloft} />
                    <SponsorCard sponsor={sponsorsJSON.github} />
                    {/* <SponsorCard sponsor={sponsorsJSON.leadingLearners} /> */}
                    <SponsorCard sponsor={sponsorsJSON.mosaic} />
                    <SponsorCard sponsor={sponsorsJSON.pwc} />
                    {/* <SponsorCard sponsor={sponsorsJSON.sleek} /> */}
                    {/* <SponsorCard sponsor={sponsorsJSON.taskade} /> */}
                    <SponsorCard sponsor={sponsorsJSON.whoosh} />
                    {/* <SponsorCard sponsor={sponsorsJSON.wolfram} /> */}
                    <SponsorCard sponsor={sponsorsJSON.amazon} />
                    {/* <SponsorCard sponsor={sponsorsJSON.dominoes} /> */}
                    <SponsorCard sponsor={sponsorsJSON.kingstonUtilities} />
                    <SponsorCard sponsor={sponsorsJSON.voiceflow} />
                    <SponsorCard sponsor={sponsorsJSON.amd} />
                    <SponsorCard sponsor={sponsorsJSON.bmo} />
                    {/* <SponsorCard sponsor={sponsorsJSON.echo} /> */}
                    <SponsorCard sponsor={sponsorsJSON.ibm} />
                    {/* <SponsorCard sponsor={sponsorsJSON.kbc} /> */}
                    <SponsorCard sponsor={sponsorsJSON.mapbox} />
                    <SponsorCard sponsor={sponsorsJSON.mars} />
                    <SponsorCard sponsor={sponsorsJSON.scotiabank} />
                    {/* <SponsorCard sponsor={sponsorsJSON.smileCDR} /> */}
                    <SponsorCard sponsor={sponsorsJSON.stanAI} />
                    <SponsorCard sponsor={sponsorsJSON.standOutStickers} />
                    {/* <SponsorCard sponsor={sponsorsJSON.xyz} /> */}
                </div>
            </div>
            <div id="sponsor-link" className="flex justify-center items-center mt-8 2xl:mt-40">
                <PartneringCard />
            </div>
        </div>
    );
};

export default SponsorSection;