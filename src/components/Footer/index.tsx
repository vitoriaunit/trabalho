import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5>CIENCIA E TECH</h5>
            <p className="text-white">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </Col>

          <Col md={4} className="text-center">
            
          </Col>

          <Col md={4} className="text-center text-md-end">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
