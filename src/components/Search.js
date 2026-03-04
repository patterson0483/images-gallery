import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Search = ({ word, setWord, handleSearchSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSearchSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  placeholder="Search for new image..."
                  type="text"
                  value={word}
                  onChange={(event) => setWord(event.target.value)}
                />
              </Col>
              <Col xs={3}>
                <Button variant="primary" type="submit" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
