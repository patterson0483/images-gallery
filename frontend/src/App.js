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
      const res = await axios.get(`${API_URL}/saved-images`);
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

    console.log('sending axios request');
    console.log(word);

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);

      const newImage = { ...res.data, title: word };

      await axios.post(`${API_URL}/images`, newImage);

      console.log('adding found image to state');
      setImages([newImage, ...images]);

      console.log('clear search form');
      setWord('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        <Row xs={1} md={2} lg={3} className="mt-4">
          {images.length === 0 && <Welcome />}
          {images.map((image, i) => (
            <Col key={i} className="pb">
              <ImageCard image={image} onDelete={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
