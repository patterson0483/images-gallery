import { useState } from 'react';
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

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log('sending fetch request');
    console.log(word);
    // fetch(`${API_URL}/new-image?query=${word}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('adding found image to state');
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      console.log('adding found image to state');
      setImages([{ ...res.data, title: word }, ...images]);
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
      {/* {images.map((image, index) => {
        if (index > 1) {
          return <ImageCard key={image.id} image={image} />;
        }
        return null;
      })} */}
    </div>
  );
};

export default App;
