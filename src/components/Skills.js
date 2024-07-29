import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useState, useEffect } from "react";

export const Skills = () => {
  const [activeBubble, setActiveBubble] = useState(null);

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
    { src: "https://asset.brandfetch.io/idu4gIg_i3/idhs2Km7tS.png", alt: "ChromaDb", name: "ChromaDb" },
    { src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", alt: "GraphQL", name: "GraphQL" },
    { src: "https://asset.brandfetch.io/idrRDmZ2_F/idpx23Pib5.png", alt: "Ollama", name: "Ollama" },
    { src: "https://asset.brandfetch.io/idR3duQxYl/idPkkA-iHI.svg", alt: "OpenAI", name: "OpenAI" },
    { src: "https://asset.brandfetch.io/idCLuo1dQ8/id9I25vXtV.png", alt: "PineCone", name: "PineCone" },
    { src: "https://asset.brandfetch.io/idiprkU6Dk/id0dUSyJZ3.jpeg", alt: "LangChain", name: "LangChain" }
  ];

  const options = {
    size: 100, // Adjusted size to fit all bubbles
    minSize: 80,
    gutter: 8,
    provideProps: true,
    numCols: 3, // Increased columns to fit more bubbles horizontally
    fringeWidth: 45,
    yRadius: 120,
    xRadius: 120,
    cornerRadius: 50,
    showGuides: false,
    compact: false,
    gravitation: 0,
  };

  const renderBubbles = (skills, className) => {
    return skills.map((skill, i) => (
      <div
        className={`childComponent ${className} ${activeBubble === i ? "active-bubble" : ""}`}
        key={i}
        onMouseEnter={() => setActiveBubble(i)}
        onMouseLeave={() => setActiveBubble(null)}
      >
        <img src={skill.src} alt={skill.alt} />
        <h5>{skill.name}</h5>
      </div>
    ));
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
                    <BubbleUI key={1} options={options} className="myBubbleUI">
                      {renderBubbles(softwareDevelopment, "software-development")}
                    </BubbleUI>
                  </div>
                  <div className="skill-section machine-learning">
                    <h3>Machine Learning</h3>
                    <BubbleUI key={2} options={options} className="myBubbleUI">
                      {renderBubbles(machineLearning, "machine-learning")}
                    </BubbleUI>
                  </div>
                  <div className="skill-section llm">
                    <h3>LLM</h3>
                    <BubbleUI key={3} options={options} className="myBubbleUI">
                      {renderBubbles(llmSkills, "llm")}
                    </BubbleUI>
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
