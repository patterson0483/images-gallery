import React from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for new image..." />
              </Col>
              <Col xs={3}>
                <Button variant="primary" type="submit" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;