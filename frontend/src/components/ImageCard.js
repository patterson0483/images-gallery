import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ImageCard = ({ image, onDelete, saveImage }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image.urls?.small} />

      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>

        {!image.saved && (
          <Button variant="primary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}

        <Button variant="danger" onClick={() => onDelete(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
