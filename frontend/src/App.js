import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);

      const newImage = {
        ...res.data,
        title: word,
      };

      setImages((currentImages) => [newImage, ...currentImages]);
      setWord('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteImage = async (image) => {
    try {
      if (image.saved && image._id) {
        await axios.delete(`${API_URL}/images/${image._id}`);
      }

      setImages((currentImages) =>
        currentImages.filter(
          (currentImage) =>
            (currentImage._id || currentImage.id) !== (image._id || image.id),
        ),
      );
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToSave = images.find((image) => image.id === id);

    if (!imageToSave) {
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/images`, {
        ...imageToSave,
        saved: true,
      });

      if (res.data?.inserted_id) {
        setImages((currentImages) =>
          currentImages.map((image) =>
            image.id === id ? { ...image, saved: true } : image,
          ),
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

      <Container>
        <Row xs={1} md={2} lg={3} className="mt-4">
          {images.length === 0 && <Welcome />}

          {images.map((image, i) => (
            <Col key={image.id || image._id || i} className="pb">
              <ImageCard
                image={image}
                onDelete={handleDeleteImage}
                saveImage={handleSaveImage}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
