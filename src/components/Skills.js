import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
import "../App.css"; // Ensure this is the correct path to your App.css file

export const Skills = () => {

  const softwareDevelopment = [
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "JavaScript", name: "JavaScript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js", name: "Node.js" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React", name: "React" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", alt: "Express.js", name: "Express.js" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", alt: "MongoDB", name: "MongoDB" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "HTML5", name: "HTML5" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "CSS3", name: "CSS3" }
  ];

  const machineLearning = [
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python", name: "Python" },
    { src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", alt: "PyTorch", name: "PyTorch" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", alt: "Scikit-learn", name: "Scikit-learn" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS", name: "AWS" },
    { src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", alt: "TensorFlow", name: "TensorFlow" },
    { src: "https://spark.apache.org/images/spark-logo-rev.svg", alt: "ApacheSpark", name: "Spark" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", alt: "Pandas", name: "Pandas" }
  ];

  const llmSkills = [
    { src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Transformers", name: "Transformers" },
    { src: "https://asset.brandfetch.io/idWIQk277S/idLQQL49Rh.jpeg", alt: "Tavily", name: "Tavily" },
    { src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", alt: "GraphQL", name: "GraphQL" },
    { src: "https://asset.brandfetch.io/idrRDmZ2_F/idpx23Pib5.png", alt: "Ollama", name: "Ollama" },
    { src: "https://asset.brandfetch.io/idR3duQxYl/idPkkA-iHI.svg", alt: "OpenAI", name: "OpenAI" },
    { src: "https://asset.brandfetch.io/idCLuo1dQ8/id9I25vXtV.png", alt: "PineCone", name: "PineCone" },
    { src: "https://asset.brandfetch.io/idiprkU6Dk/id0dUSyJZ3.jpeg", alt: "LangChain", name: "LangChain" }
  ];

  const renderBubbles = (skills, className) => {
    const centerBubble = skills[0];
    const orbitBubbles = skills.slice(1);
    const radius = 130; // Adjust radius for the circular arrangement based on increased width
    const angleStep = (2 * Math.PI) / orbitBubbles.length;

    return (
      <div className="bubble-container">
        <div className={`bubble ${className}`} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={centerBubble.src} alt={centerBubble.alt} />
          <h5>{centerBubble.name}</h5>
        </div>
        {orbitBubbles.map((skill, i) => {
          const angle = i * angleStep;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              className={`bubble ${className}`}
              key={i}
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: 'translate(-50%, -50%)' }}
            >
              <img src={skill.src} alt={skill.alt} />
              <h5>{skill.name}</h5>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>"My skills are like a well-choreographed dance, gracefully gliding through challenges with precision and style."</p>
                <div className="skill-category">
                  <div className="skill-section software-development">
                    <h3>Software Development</h3>
                    {renderBubbles(softwareDevelopment, "software-development")}
                  </div>
                  <div className="skill-section machine-learning">
                    <h3>Machine Learning</h3>
                    {renderBubbles(machineLearning, "machine-learning")}
                  </div>
                  <div className="skill-section llm">
                    <h3>LLM</h3>
                    {renderBubbles(llmSkills, "llm")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BgImage" />
      </section>
    </>
  );
};
