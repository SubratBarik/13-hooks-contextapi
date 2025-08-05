import {useContext} from 'react';
import {MovieContext} from './MovieContext';
import Movie from './Movie';

export default function MovieList() {

    //const movieData = useContext(MovieContext);
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>
            <h3>Movie List</h3>
            <ul>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} id={movie.id} />
            ))}
            </ul>

        </>
    )
}
