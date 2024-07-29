import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import brizaLogo from '../assets/img/briza_logo.png'; // Import the Briza logo

export const Experience = () => {
    const experiences = [
        {
            period: "June 2024 - August 2024",
            role: "Public Policy and Data Science Intern",
            company: "Briza",
            description: [
                "Devised a Good-Policy Chatbot to suggest data science-related public policies, achieving 85% accuracy in recommendations. Utilized LangChain and LangGraph with Python Web Scraping to gather and process data from public policy news articles.",
                "Created chunking embeddings from scraped text and stored in ChromaDb. Implemented local training of Llama3 and Mistral models leveraging Ollama, reducing GPU cost instances by 30%.",
                "Integrated Tavily for web searches on non-relevant questions, ensuring accurate responses. Engineered prompts to check for and remove hallucinations, boosting reliability of the chatbot."
            ],
            skills: ["LangChain", "LangGraph", "Python", "Web Scraping", "Ollama", "OpenAI"],
            logo: brizaLogo, // Add logo for Briza
            logoClass: 'briza-logo' // Add a specific class for Briza logo
        },
        {
            period: "July 2022 - June 2023",
            role: "Data Science Intern",
            company: "BookMyShow",
            description: [
                "Collaborated with a cross-functional team of data scientists on five key product and business initiatives, enhancing customer engagement by 30% through targeted metrics; accurately predicted the potential customer base for events like Lollapalooza with an 80% success rate using transactional data and predictive analytics techniques.",
                "Revamped recommendation models by proposing generic affinity models, optimizing delivery time by approximately 30%. Leveraged Confluence for technical documentation and supported ad-hoc analyses.",
                "Utilized statistical analysis to reduce on-call support needs by 60% and achieve a cost saving of 40%, POC for generating AI-based personalized movie posters for users."
            ],
            skills: ["Predictive Analytics", "Recommendation Models", "Statistical Analysis", "AI", "Confluence"],
            logo: "https://asset.brandfetch.io/id4J58sqa_/idcHqihl5c.svg" // Add logo for BookMyShow
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row className="align-items-center">
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Experience</h2>
                                    <div className="timeline">
                                        {experiences.map((exp, index) => (
                                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                                <div className={`timeline-badge ${exp.logoClass || ''}`}>
                                                    {exp.logo ? (
                                                        <img src={exp.logo} alt={`${exp.company} logo`} />
                                                    ) : (
                                                        <span>{exp.version || exp.period}</span>
                                                    )}
                                                </div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h3>{exp.role}</h3>
                                                        <h4>{exp.company}</h4>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>{exp.period}</p>
                                                        {exp.description && exp.description.map((desc, i) => (
                                                            <p key={i}>● {desc}</p>
                                                        ))}
                                                        <div className="skills-container">
                                                            {exp.skills.map((skill, i) => (
                                                                <span key={i} className="skill-badge">{skill}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
