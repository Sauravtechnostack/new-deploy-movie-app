import { handleError } from '@/lib/errorHandler';
import Movie from '../models/movie';

/**
 * Create a new movie document.
 * @param movieData Object containing movie details
 * @returns Newly created movie document or an error
 */
export const createNewMovie = async (movieData: {
  posterImage: string;
  title: string;
  releaseYear: number;
  created_by: string;
}) => {
  try {
    // Create a new movie
    const newMovie = await Movie.create(movieData);
    return { success: true, data: newMovie };
  } catch (error) {
    return handleError(error)
  }
};

/**
 * Retrieve all movies from the database.
 * @returns Array of movie documents or an error
 */
export const getAllMovies = async () => {
  try {
    const movies = await Movie.find().populate('created_by', 'name email'); // Populating creator details (adjust fields as necessary)
    return { success: true, data: movies };
  } catch (error) {
    return handleError(error)
  }
};

/**
 * Update a movie document by ID.
 * @param id Movie ID to update
 * @param updateData Object containing fields to update
 * @returns Updated movie document or an error
 */
export const updateMovieFromId = async (id: string, updateData: Partial<{
  posterImage: string;
  title: string;
  releaseYear: number;
  created_by: string;
}>) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedMovie) {
      throw new Error('Movie not found');
    }

    return { success: true, data: updatedMovie };
  } catch (error) {
    return handleError(error)
  }
};
