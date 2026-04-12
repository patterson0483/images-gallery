import { Container, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="p-5 mb-4 bg-light rounded-3 text-center">
      <h1>Images Gallery</h1>
      <p>This is a simple application that retrieves photos</p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
      <p>Feel free to explore and modify the code to learn more about React.</p>
    </Container>
  );
};

export default Welcome;
