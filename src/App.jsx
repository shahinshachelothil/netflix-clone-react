
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import MovieCards from './Components/MovieCards/MovieCards';
import Navbar from './Components/Navbar/Navbar';
import {action,comedy,horror,originals,romance} from './urls';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MovieCards title="Netflix Originals" urls={originals} islarge/>
      <MovieCards title="Romance" urls={romance}/>
      <MovieCards title="Comedy" urls={comedy}/>
      <MovieCards title="Action" urls={action}/>
      <MovieCards title="Horror" urls={horror}/>
      <Footer/>
    </div>
  );
}

export default App;
