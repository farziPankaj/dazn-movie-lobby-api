import { Router } from 'express';
import { checkRole } from '../middleware/middleware';
import redisCache from '../middleware/redisCache';
import {
  getMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movieController';
import {
  validateAddMovie,
  validateDeleteMovie,
  validateUpdateMovie
} from '../middleware/middleware';

const router = Router();

router.get('/routes', (_, res) => {
    console.log(`Routes working fine.`);
    res.status(200).send({
      statusCode: 200,
      success: true,
      status: 'Routes OK',
      message: 'Routes working fine'
    });
});

// to get movie list
router.get('/movies', getMovies);

// to get movie as per title or genre
router.get('/search', redisCache(60), searchMovies);

router.post('/movies', checkRole, validateAddMovie, addMovie);
router.put('/movies/:id', checkRole, validateUpdateMovie, updateMovie);
router.delete('/movies/:id', checkRole, validateDeleteMovie, deleteMovie);

export default router;
