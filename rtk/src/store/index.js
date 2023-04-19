import { configureStore } from '@reduxjs/toolkit';
import { addMovie, removeMovie } from './slices/movieSlice';
import { addSong, removeSong } from './slices/songsSlice';
import { movieReducer } from './slices/movieSlice';
import { songsReducer } from './slices/songsSlice';
import { reset } from './actions';
const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: movieReducer
    }
});
export { store, addSong, removeSong, addMovie, removeMovie, reset };