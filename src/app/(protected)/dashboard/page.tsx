import { Suspense } from "react";
import Loading from "./components/loading-state";
import MovieListHeader from "./components/movie-list-header";
import { Metadata } from "next";
import MoviesLoader from "./components/movies-loader";

type SearchParams = {
  page?: string;
  limit?: string;
};

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Look into your added movies.'
}

export const dynamic = 'force-dynamic'

async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Get params
  const page = parseInt((await searchParams).page as string) || 1;
  const limit = parseInt((await searchParams).limit as string) || 8;

  return (
    <>
      <div className="container w-screen h-screen">
        <div className="pt-10 lg:pt-20">
          <MovieListHeader />
        </div>

        <Suspense fallback={<Loading />}>
          <MoviesLoader limit={limit} page={page} />
        </Suspense>
      </div>
    </>
  );
}

export default Dashboard;
