import FAQDropdown from "../FAQDropdown";

const faqs = {
    faq1: {
        question: "Will QHACKS 2023 be in-person or virtual?",
        answer: "QHacks will be fully in-person this year, for the first time since 2019! QHacks will be hosted on campus, at Queen’s University!",
    },
    faq2: {
        question: "What is a hackathon?",
        answer: "A hackathon is a 36-hour event where students come together to build a project from scratch. It’s a great opportunity to learn new skills, meet new people, and win prizes!",
    },
    faq3: {
        question: "Who can attend QHacks?",
        answer: "QHacks is open to all undergraduate students, graduate students, and recent graduates (up to 1 year after graduation) from any university or college. If you are a high school student, check out QHacks Jr.!",
    },
    faq4: {
        question: "How much does it cost to attend QHacks?",
        answer: "QHacks is completely free for all attendees! We will provide you with food, swag, and a great time!",
    },
    faq5: {
        question: "What if I don’t have a team?",
        answer: "No problem! We will have team formation events before the hackathon, and you can also find teammates on our Discord server.",
    },
};

const FAQSection = () => {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className=" w-80">
                    <FAQDropdown faq={faqs.faq1}/>
                    <FAQDropdown faq={faqs.faq2}/>
                    <FAQDropdown faq={faqs.faq3}/>
                    <FAQDropdown faq={faqs.faq4}/>
                    <FAQDropdown faq={faqs.faq5}/>
                </div>
                <div className=" w-80 ">
                    <FAQDropdown faq={faqs.faq1}/>
                    <FAQDropdown faq={faqs.faq2}/>
                    <FAQDropdown faq={faqs.faq3}/>
                    <FAQDropdown faq={faqs.faq4}/>
                    <FAQDropdown faq={faqs.faq5}/>
                </div>
            </div>
        </div>
        
    )
};

export default FAQSection;