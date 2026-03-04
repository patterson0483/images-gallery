import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
// import Gallery from './components/Gallery';
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
     setWord(''); // Clear the input field after search
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit} />
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
