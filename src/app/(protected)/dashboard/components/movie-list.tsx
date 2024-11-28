"use client";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "@/hooks/useToast";
import { useApi } from "@/hooks/useApi";
import MovieListPagination from "./movie-list-pagination";

type MovieData = {
  movies: Movie[];
  pagination: {
    totalMovies: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};

type MoiveListProps = {
  data: MovieData;
  currentPage: number;
  limit: number;
  totalPages: number;
};

function MoviesList({ data, currentPage, limit, totalPages }: MoiveListProps) {
  const [movieList, setMovieList] = useState(data.movies);
  const router = useRouter();

  const {
    callApi: deleteMovieApiCall,
    error: deleteMovieError,
    isLoading: isDeleteMovieLoading,
  } = useApi();

  const handleDeleteCard = async (movieId: string) => {
    try {
      await deleteMovieApiCall({
        url: `api/movies/${movieId}`,
        method: "DELETE",
      });

      setMovieList((movieList) =>
        movieList.filter((movie) => movie._id !== movieId)
      );

      router.refresh();

      toast({
        title: "Poof! It's Gone!",
        description:
          "You’ve just wiped this movie from your collection. Abracadabra!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: deleteMovieError || "An error occurred",
        variant: `${deleteMovieError ? "warning" : "destructive"}`,
      });
    }
  };

  return (
    <>
      {/* List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] sm:gap-[24px] place-items-center mt-5 lg:mt-10">
        { movieList.length > 0 &&
          movieList.map(({ _id, posterImage, title, releaseYear }) => (
            <Link href={`/movie/${_id}`} key={_id}>
              <Card
                key={_id}
                id={_id}
                posterUrl={posterImage}
                title={title}
                releaseYear={releaseYear}
                handleDeleteCard={handleDeleteCard}
                isDeleteMovieLoading={isDeleteMovieLoading}
              />
            </Link>
          ))}
      </div>
      <div>
        <MovieListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          limit={limit}
        />
      </div>
    </>
  );
}

export default MoviesList;
