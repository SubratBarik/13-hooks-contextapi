import './App.css';
import MovieList from "./MovieList";
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <>
      <MovieProvider>
        <MovieList />
      </MovieProvider>
    </>
  );
}

export default App;
