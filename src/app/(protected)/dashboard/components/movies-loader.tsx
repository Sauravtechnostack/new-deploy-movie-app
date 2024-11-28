import { getAllMoviesApi } from "@/services/api.service";
import React from "react";
import MoviesList from "./movie-list";
import DashboardEmptyState from "./empty-state";

export const dynamic = "force-dynamic";

const MoviesLoader = async ({ page, limit }: { page: number; limit: number }) => {
  const moviesData = await getAllMoviesApi(page, limit);
  const totalPages = moviesData?.pagination?.totalPages || 1;

  return (
    <>
      {moviesData && moviesData?.movies.length > 0 ? (
        <MoviesList
          data={moviesData}
          currentPage={page}
          limit={limit}
          totalPages={totalPages}
        />
      ) : (
        <DashboardEmptyState />
      )}
    </>
  );
};

export default MoviesLoader;
