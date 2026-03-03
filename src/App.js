import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
// import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search />
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
