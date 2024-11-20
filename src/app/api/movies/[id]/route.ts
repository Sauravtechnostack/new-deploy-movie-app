// app/api/movies/[id]/route.ts
import { handleError } from '@/lib/errorHandler';
import { authGuard } from '@/lib/guards/auth.guard';
import { getMovieFromId, updateMovieFromId } from '@/services/movie.service';
import { NextRequest, NextResponse } from 'next/server';

// PUT handler to update a movie based on movie ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Step 1: Authenticate the user
    const user = await authGuard(req);
    const movieId = (await params).id;
    // Step 2: Get the movie ID from URL params

    // Step 3: Check if the movie exists and belongs to the user
    const movie = await getMovieFromId(movieId, user._id);

    console.log("Movie")

    if (!movie) {
      return NextResponse.json({ message: 'Movie not found or unauthorized access' }, { status: 403 });
    }

    // Step 4: Update the movie based on the request body
    const updatedMovie = await updateMovieFromId(movieId, {
        posterImage: "asdas",
        title: "Oppps"
    });

    // Step 5: Respond with the updated movie
    return NextResponse.json({}, { status: 200 });
    
  } catch (error) {
    return handleError(error)
  }
}
