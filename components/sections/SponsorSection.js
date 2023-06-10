import SponsorCard from '../SponsorCard';

const SponsorSection = () => {
    const sponsors = {
        amazon : {
          name: 'Amazon',
          logo: '/sponsors/Amazon.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-indigo-600  rounded-xl',
        },
        redbull : {
          name: 'Redbull',
          logo: '/sponsors/Redbull.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-red-600  rounded-xl',
        },
        dominoes : {
          name: 'Dominoes',
          logo: '/sponsors/Dominoes.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-indigo-600  rounded-xl',
        },
        otpp : {
          name: 'Ontario Teachers Pension Plan',
          logo: '/sponsors/OTPP.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-yellow-600  rounded-xl',
        },
        kingstonutilities : {
          name: 'Kingston Utilities',
          logo: '/sponsors/KingstonUtilities.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-red-600  rounded-xl',
        },
        ece : {
          name: 'Queence Engineering',
          logo: '/sponsors/ECE.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-indigo-600  rounded-xl',
        },
        queensComputing : {
          name: 'Queens Computing',
          logo: '/sponsors/QueensComputing.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-yellow-600  rounded-xl',
        },
        voiceflow : {
          name: 'Voiceflow',
          logo: '/sponsors/Voiceflow.svg',
          link: 'https://www.amazon.jobs/en/',
          borderColor: 'border-4 border-red-600  rounded-xl',
        },
      };

    return(
        <div className='flex flex-row p-0 flex-wrap items-center justify-center space-x-4 space-y-4'>
          <SponsorCard sponsor={sponsors.redbull} />  
          <SponsorCard sponsor={sponsors.amazon} />
          <SponsorCard sponsor={sponsors.otpp} />
          <SponsorCard sponsor={sponsors.kingstonutilities} />
          <SponsorCard sponsor={sponsors.ece} />
          <SponsorCard sponsor={sponsors.queensComputing} />
          <SponsorCard sponsor={sponsors.voiceflow} />
        </div>
    );
};

export default SponsorSection;