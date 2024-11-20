import { handleError } from '@/lib/errorHandler';
import Movie, { IMovie } from '../models/movie';
import { Types } from 'mongoose';
import CustomError from '@/lib/customError';

/**
 * Create a new movie document.
 * @param movieData Object containing movie details
 * @returns Newly created movie document or an error
 */
export const createNewMovie = async (movieData: {
  posterImage: string;
  title: string;
  releaseYear: number;
  userId: Types.ObjectId;
}) => {
  try {
    // Create a new movie
    const newMovie = await Movie.create(movieData);
    return newMovie;
  } catch (error) {
    return handleError(error)
  }
};

/**
 * Get a movie by its ID and check if it is associated with the user.
 * @param movieId The ID of the movie to retrieve.
 * @param userId The user ID to verify ownership of the movie.
 * @returns Movie document or an error if not found or unauthorized.
 */
export const getMovieFromId = async (movieId: string, userId: Types.ObjectId) => {
  try {
    const movie = await Movie.findOne({
      _id: movieId,
      userId
    });
    return movie;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Retrieve paginated movies from the database.
 * @param userId - The user's ID
 * @param pagination - Pagination information including page and limit
 * @returns Array of movie documents or an error
 */
export const getAllMovies = async (userId: Types.ObjectId, pagination: Pagination) => {
  const { page, limit, skip } = pagination;

  try {
    // Query the database with pagination
    const movies = await Movie.find({
      userId,
    })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get the total count for pagination
    const totalMovies = await Movie.countDocuments({ userId });

    return {
      movies,
      pagination: {
        totalMovies,
        totalPages: Math.ceil(totalMovies / limit),
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    return handleError(error);
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
    const updatedMovie = await Movie.findByIdAndUpdate(id, updateData);

    if (!updatedMovie) {
      throw new CustomError('Movie not found', 404);
    }

    return updatedMovie;
  } catch (error) {
    return handleError(error)
  }
};
