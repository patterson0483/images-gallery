import { Container, Row, Col, Image } from "react-bootstrap";

function Gallery() {
  return (
    <Container className="mt-4">
      <Row className="g-3">
        <Col xs={12} md={6} lg={3}>
          <Image src="https://picsum.photos/600/400?1" fluid rounded />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Image src="https://picsum.photos/600/400?2" fluid rounded />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Image src="https://picsum.photos/600/400?3" fluid rounded />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Image src="https://picsum.photos/600/400?4" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;