import { Request, Response } from 'express';
import movieService from '../services/movieService';

export const getMovies = async (req: Request, res: Response) => {
    console.log("--------------In movieController file & getMovies method--------------");
    try {
        const movies = await movieService.getMovieList();
        res.status(200).json(movies);
    } catch (err) {
        console.log("--------------In catch block of movieController file & getMovies method--------------");
        console.log({error: err});
        res.status(500).send({message: `${err}`});
    }
};

export const searchMovies = async (req: Request, res: Response) => {
    console.log("--------------In movieController file & searchMovies method--------------");
    try {
        const query = req.query.q as string;
        const movies = await movieService.searchMovies(query);
        res.locals.body = movies;
        res.status(200).json(movies);
    } catch (err) {
        console.log("--------------In catch block of movieController file & searchMovies method--------------");
        console.log({error: err});
        res.status(500).send({message: `${err}`});
    }
};

export const addMovie = async (req: Request, res: Response) => {
    console.log("--------------In movieController file & addMovie method--------------");
    try {
        const newMovie = await movieService.addMovie(req.body);
        res.status(201).json(newMovie);
    } catch (err) {
        console.log("--------------In catch block of movieController file & addMovie method--------------");
        console.log({error: err});
        res.status(400).send({message: `${err}`});
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    console.log("--------------In movieController file & updateMovie method--------------");
    try {
        const updatedMovie = await movieService.updateMovie(req.params.id, req.body);
        res.status(201).json(updatedMovie);
    } catch (err) {
        console.log("--------------In catch block of movieController file & updateMovie method--------------");
        console.log({error: err});
        res.status(400).send({message: `${err}`});
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    console.log("--------------In movieController file & deleteMovie method--------------");
    try {
        await movieService.deleteMovie(req.params.id);
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (err) {
        console.log("--------------In catch block of movieController file & deleteMovie method--------------");
        console.log({error: err});
        res.status(400).send({message: `${err}`});
    }
};