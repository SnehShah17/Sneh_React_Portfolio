import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Ensure this path is correct
import nlpImg1 from "../assets/img/nlp-img1.png";
import nlpImg2 from "../assets/img/nlp-img2.png";
import nlpImg3 from "../assets/img/nlp-img3.png";
import mlImg1 from "../assets/img/ml-img1.png";
import mlImg2 from "../assets/img/ml-img2.png";
import mlImg3 from "../assets/img/ml-img3.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');
  const [animate, setAnimate] = useState(false);
  const [index, setIndex] = useState(0);

  const handleTabSelect = (selectedTab) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration to match your animation duration
    setActiveTab(selectedTab);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    const tabMap = ['first', 'second', 'third'];
    handleTabSelect(tabMap[selectedIndex]);
  };

  const handleNext = () => {
    const newIndex = (index + 1) % 3;
    handleSelect(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (index + 3 - 1) % 3;
    handleSelect(newIndex);
  };

  const descriptions = {
    first: "Explore my Natural Language Processing (NLP) projects where I delve into the intricacies of language models, text analysis, and more.",
    second: "Discover my Machine Learning (ML) projects showcasing my work on predictive modeling, deep learning, and data analysis.",
    third: "Check out my Software Development Engineering (SDE) projects featuring full-stack development, system design, and innovative solutions."
  };

  const projectsNLP = [
    {
      title: "Rolling Hash Embedding for Efficient NLP Deployment",
      description: "Created a novel hashing algorithm for dynamic word embeddings generation, streamlining deep learning model training time for Feed Forward and Convolutional Neural Network models. Enhanced accuracy in sentiment analysis tasks by 3.58% while decreasing memory usage by 92.9% compared to Google Word2Vec.",
      skills: "Python, NLP, Deep Learning",
      imgUrl: nlpImg1,
      link: "https://docs.google.com/presentation/d/1bAQUmShG6FAR1S84HwJXeNIY2HNNzS_PlD9uaSXLueY/edit?usp=sharing"
    },
    {
      title: "Sentiment Analysis on Amazon Reviews Dataset",
      description: "Conducted binary and ternary classification tasks on a dataset of 2.64 million reviews, leveraging advanced machine learning approaches like FFN and CNN to analyze large-scale data and achieve optimal model performance ~ 95% accuracy.",
      skills: "Python, Machine Learning, CNN, FFN",
      imgUrl: nlpImg2,
      link: "https://github.com/user/nlp-project2"
    },
    {
      title: "Good-Policy Chatbot",
      description: "Devised a Good-Policy Chatbot to suggest data science-related public policies, achieving 85% accuracy in recommendations. Utilized LangChain and LangGraph with Python Web Scraping to gather and process data from public policy news articles. Created chunking embeddings from scraped text and stored in ChromaDb. Implemented local training of Llama3 and Mistral models leveraging Ollama, reducing GPU cost instances by 30%. Integrated Tavily for web searches on non-relevant questions, ensuring accurate responses. Engineered prompts to check for and remove hallucinations, boosting reliability of the chatbot.",
      skills: "Python, LangChain, LangGraph, Web Scraping, Llama3, Mistral, ChromaDb, Tavily",
      imgUrl: nlpImg3,
      link: "https://github.com/BrizaGit/Briza_WorkBook_Summer_Interns"
    }
  ];

  const projectsML = [
    {
      title: "Stylebot (USC Viterbi Summer Smasher Program)",
      description: "Implemented generative AI techniques leveraging Llama3, Mistral, GPT-2, GPT-Neo with HuggingFace, optimizing models, resulting in a 30% improvement in efficiency with PineCone and ChromaDB. Conducted experiments, documented style recommendations using Vector Embeddings, comparing outputs across models and databases, enhancing editorial accuracy by 50% and integrating into existing workflows.",
      skills: "Llama3, Mistral, GPT-2, GPT-Neo, HuggingFace, PineCone, ChromaDB",
      imgUrl: mlImg1,
      link: "https://docs.google.com/presentation/d/1Xy7w8iu6ahyn2XJJ4moedhtJq1fGrs6GBpK7bn-FZmc/edit?usp=sharing"
    },
    {
      title: "Urban Futures Data Core",
      description: "Selected among 100+ students to collaborate with a team of 6 students and created a deep learning NLP model to predict and extract dataset names from numerous research papers published by USC’s Policy School professors. Elevated research endeavors by aiding 100+ students and faculty in accessing datasets integral to more than 2000 research papers.",
      skills: "Selenium, Python",
      imgUrl: mlImg2,
      link: "https://docs.google.com/presentation/d/1Fj2u2FMVXg94VjqAwWUkwmmeu877wPxW6SH1apWGBmo/edit?usp=sharing"
    },
    {
      title: "Hurricane Intensity Estimation using Imagery Dataset",
      description: "Leveraged innovative methods to glean insights from the National Hurricane Center's HURDAT2 database (2015-2019) for precise hurricane intensity forecasts. Implemented a 5-layer CNN and diverse performance metrics to refine predictive capabilities.",
      skills: "Python, CNN, Data Analysis",
      imgUrl: mlImg3,
      link: "https://github.com/SnehShah17/Deep-Learning-Based-Hurricane-Intensity-Estimation-"
    }
  ];

  const projectsSDE = [
    {
      title: "Real-Time Stock Trading Website",
      description: "Designed and developed a real-time stock trading website offering a comprehensive suite of functionalities including portfolio management, user watchlists, and buy/sell features. Integrated advanced autocomplete search, dynamic recommendation trends charts (daily and hourly), and data visualization to enhance user experience and provide actionable insights.",
      skills: "HTML, CSS, Angular, Node.js, MongoDB, Asynchronous APIs",
      imgUrl: projImg1,
      link: "https://csci571hw3sneh.wl.r.appspot.com"
    },
    {
      title: "Goonj (A NGO Website)",
      description: "Designed and built an interactive NGO website featuring 2 profiles catering to user and administrator functionalities. Implemented secure admin login for seamless content editing and privilege delegation on website. Crafted user-centric experience for visitors to explore NGOs initiatives, access blogs, and search via keyword filter.",
      skills: "HTML, CSS, JavaScript, PHP, XAMPP",
      imgUrl: projImg2,
      link: "https://github.com/user/sde-project2"
    },
    {
      title: "OHLC Stock Symbol Webapp – Northern Trust Bank",
      description: "Created and hosted a dynamic python webapp for Northern Trust Bank within 24 hours. App displays various types of charts based on input of stock symbols with a slider to set specific time range.",
      skills: "Python, Streamlit",
      imgUrl: projImg3,
      link: "https://github.com/SnehShah17/SnehShah17-OHLC-Engine"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>{descriptions[activeTab]}</p>
            <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">NLP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">ML</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">SDE</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row className="mb-4">
                    {projectsNLP.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row className="mb-4">
                    {projectsML.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row className="mb-4">
                    {projectsSDE.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <div className="carousel-controls">
              <button onClick={handlePrev} className="carousel-control-prev">
                &lt;
              </button>
              <button onClick={handleNext} className="carousel-control-next">
                &gt;
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
