import {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter 1',
            price: '$100',
            id: 100
        },
        {
            name: 'Harry Potter 2',
            price: '$110',
            id: 101
        },
        {
            name: 'Harry Potter 3',
            price: '$125',
            id: 102
        },
        {
            name: 'Harry Potter 4',
            price: '$135',
            id: 103
        },
        {
            name: 'Harry Potter 5',
            price: '$155',
            id: 104
        }
    ]);

    return(
        <>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </>
    );
}