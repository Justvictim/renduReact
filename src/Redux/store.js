import { createStore, combineReducers } from 'redux'
import Movies from '../Services/Movies'

const globalState = {
    movies: Movies,
    // movies_count: Movies.length
}

function global (state = globalState, action) {
    
    let movies = state.movies

    switch(action.type) {

        case 'ADD_MOVIE':
            movies.push(action.data)
            return { ...state, movies: movies }
        case 'DELETE_MOVIE':
            console.log('DELETE_MOVIE')
            movies.splice(action.index, 1)
            console.log(movies)

            console.log({ ...state, movies: movies })

            return { ...state, movies: movies }

        default:
            console.log('-----')
            return state
            

    }

}

const store = createStore(combineReducers({
    global: global
}))

export default store