import movieService from '../services/movieService';
import Movie from '../models/movieModel';

// Mock Mongoose methods
jest.mock('../models/movieModel');

describe('movieService', () => {
  it('should fetch the list of movies', async () => {

    // Mock the return value of Movie.find
    Movie.find = jest.fn().mockResolvedValue([{ title: 'Movie 1' }, { title: 'Movie 2' }]);

    const movies = await movieService.getMovieList();
    expect(movies).toEqual([{ title: 'Movie 1' }, { title: 'Movie 2' }]);
  });

  it('should search for movies', async () => {
    
    Movie.find = jest.fn().mockResolvedValue([{ title: 'Movie 1', genre: 'Action'  }]);

    const result = await movieService.searchMovies('Action');
    expect(result).toEqual([{ title: 'Movie 1', genre: 'Action' }]);
  });

  it('should add a new movie', async () => {

    const mockMovie = { title: 'Movie 1', description: 'A good movie', genre: 'Drama', rating: 5, streamingLink: 'link' };
    
    Movie.prototype.save = jest.fn().mockResolvedValue(mockMovie);

    const addedMovie = await movieService.addMovie(mockMovie);
    expect(addedMovie).toEqual(mockMovie);
  });

  it('should update a movie', async () => {

    const mockUpdatedMovie = { title: 'Updated Movie', genre: 'Action' };
    
    Movie.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUpdatedMovie);

    const updatedMovie = await movieService.updateMovie('movieId', mockUpdatedMovie);
    expect(updatedMovie).toEqual(mockUpdatedMovie);
  });

  it('should delete a movie', async () => {

    const mockDeletedMovie = { title: 'Movie 1', genre: 'Action' };
    
    Movie.findByIdAndDelete = jest.fn().mockResolvedValue(mockDeletedMovie);

    const deletedMovie = await movieService.deleteMovie('movieId');
    expect(deletedMovie).toEqual(mockDeletedMovie);
  });
});
