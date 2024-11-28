import React, { Suspense } from "react";
import { Metadata } from "next";
import MovieForm from "../components/movie-form";
import MovieFormLoading from "../loading";

export const metadata: Metadata = {
  title: "Add New Movie",
  description: "Page to add a new movie",
};

export const dynamic = "force-static";

function AddNewMoviePage() {
  return (
    <>
      <Suspense fallback={<MovieFormLoading />}>
        <MovieForm />
      </Suspense>
    </>
  );
}

export default AddNewMoviePage;
