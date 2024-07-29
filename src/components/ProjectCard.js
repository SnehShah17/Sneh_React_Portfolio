import { Col, Card } from "react-bootstrap";

export const ProjectCard = ({ title, description, skills, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} className="d-flex align-items-stretch mb-4">
      <Card bg="dark" text="white" className="mb-4 w-100">
        <Card.Img variant="top" src={imgUrl} className="project-image" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="project-description">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="skills-footer">
          <div className="skills-container">
            {skills.split(', ').map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
          {link && <Card.Link className="project-link" href={link} target="_blank" rel="noopener noreferrer">View Project</Card.Link>}
        </Card.Footer>
      </Card>
    </Col>
  );
};
