import Movie from '../models/movieModel';

class MovieService {
    
    // Get all movies i.e. list of movies
    async getMovieList(): Promise<object> {
        console.log("--------------In movieService file & getMovieList method--------------");
        try {
            return await Movie.find({}, {__v:0});
        } catch (err) {
            console.log("--------------In catch block of movieService file & getMovieList method--------------");
            throw new Error(`${err}`);
        }
    }

    // Search movies by title or genre
    async searchMovies(query: string): Promise<object> {
        console.log("--------------In movieService file & searchMovies method--------------");
        try {
            const movie = await Movie.find({
                $or: [
                    { title: new RegExp(query, 'i') },
                    { genre: new RegExp(query, 'i') }
                ]
            }, {__v:0});
            return movie
        } catch (err) {
            console.log("--------------In catch block of movieService file & searchMovies method--------------");
            throw new Error(`${err}`);
        }
    }

    // Add a new movie
    async addMovie(movieData: object): Promise<object> {
        console.log("--------------In movieService file & addMovie method--------------");
        try {
            const newMovie = new Movie(movieData);
            const addedMovie = await newMovie.save();
            return addedMovie;
        } catch (err) {
            console.log("--------------In catch block of movieService file & addMovie method--------------");
            throw new Error(`${err}`);
        }
    }

    // Update a movie by ID
    async updateMovie(id: string, movieData: object): Promise<object> {
        console.log("--------------In movieService file & updateMovie method--------------");
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, { new: true });
            if (!updatedMovie) throw new Error('Movie not found');
            return updatedMovie;
        } catch (err) {
            console.log("--------------In catch block of movieService file & updateMovie method--------------");
            throw new Error(`${err}`);
        }
    }

    // Delete a movie by ID
    async deleteMovie(id: string): Promise<object> {
        console.log("--------------In movieService file & deleteMovie method--------------");
        try {
            const deletedMovie = await Movie.findByIdAndDelete(id);
            if (!deletedMovie) throw new Error('Movie not found');
            return deletedMovie;
        } catch (err) {
            console.log("--------------In catch block of movieService file & deleteMovie method--------------");
            throw new Error(`${err}`);
        }
    }
}

export default new MovieService();
