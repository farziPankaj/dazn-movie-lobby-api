// import { Request, Response } from 'express';
// import { getMovies, searchMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController';
// import movieService from '../services/movieService';

// // Mock movieService methods
// jest.mock('../services/movieService', () => ({
//   getMovieList: jest.fn(),
//   searchMovies: jest.fn(),
//   addMovie: jest.fn(),
//   updateMovie: jest.fn(),
//   deleteMovie: jest.fn(),
// }));

// describe('movieController', () => {
    
//     // Unit test for getMovies
//     it('should return a list of movies', async () => {
//         const mockMovies = [{ title: 'Movie1', genre: 'Action', description: "sample", rating: "4.0", streamingLink: "www.xyz.com/something-here" }];
//         movieService.getMovieList = jest.fn().mockResolvedValue(mockMovies);


//         const req = {} as Request;
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };

//         await getMovies(req, res);

//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith(mockMovies);
//     });

//     // Unit test for searchMovies
//     it('should return searched movies', async () => {
//         const mockMovies = [{ title: 'Movie1', genre: 'Action', description: "sample", rating: "4.0", streamingLink: "www.xyz.com/something-here" }];
//         const query = 'Action';
//         movieService.searchMovies = jest.fn().mockResolvedValue(mockMovies);

//         const req = { query: { q: query } };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };

//         await searchMovies(req, res);

//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith(mockMovies);
//     });

//     // Unit test for addMovie
//     it('should add a movie', async () => {
//         const mockMovie = [{ title: 'Movie1', genre: 'Action', description: "sample", rating: "4.0", streamingLink: "www.xyz.com/something-here" }];
//         movieService.addMovie = jest.fn().mockResolvedValue(mockMovie);

//         const req = { body: mockMovie };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         }as unknown as Response;

//         await addMovie(req, res);

//         expect(res.status).toHaveBeenCalledWith(201);
//         expect(res.json).toHaveBeenCalledWith(mockMovie);
//     });

//     // Unit test for updateMovie
//     it('should update a movie', async () => {
//         const mockMovie = [{ title: 'Movie1', genre: 'Action Fighting', description: "sample", rating: "4.0", streamingLink: "www.xyz.com/something-here" }];
//         const movieId = '123';
//         movieService.updateMovie = jest.fn().mockResolvedValue(mockMovie);

//         const req = { params: { id: movieId }, body: mockMovie };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };

//         await updateMovie(req, res);

//         expect(res.status).toHaveBeenCalledWith(201);
//         expect(res.json).toHaveBeenCalledWith(mockMovie);
//     });

//     // Unit test for deleteMovie
//     it('should delete a movie', async () => {
//         const movieId = '123';
//         movieService.deleteMovie = jest.fn().mockResolvedValue({ message: 'Movie deleted successfully' });

//         const req = { params: { id: movieId } };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };

//         await deleteMovie(req, res);

//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith({ message: 'Movie deleted successfully' });
//     });
// });
