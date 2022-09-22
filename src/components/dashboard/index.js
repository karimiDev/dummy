import { Row, Col } from "react-bootstrap";
import InfoForm from "./InfoForm";
import Slider from "./Slider";

function Index() {
  return (
    <>
      <Row className="position-relative">
        <Col lg={6}>
          <InfoForm />
        </Col>
        <Col lg={6} className="mt-3 mt-lg-0">
          <Slider />
        </Col>
      </Row>
    </>
  );
}

export default Index;
