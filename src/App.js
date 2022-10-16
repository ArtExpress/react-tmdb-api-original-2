import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MoviePage from "./pages/MoviePage"
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path=":id" element={<MoviePage />} />
            <Route path="/search" element={<MoviesPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
