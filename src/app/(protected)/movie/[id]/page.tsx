import React, { Suspense } from "react";
import MovieForm from "@/app/(protected)/movie/components/movie-form";
import { cookies } from "next/headers";
import MovieFormLoading from "../loading";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const cookieHeader = cookies().toString();
  const id = params.id;

  const response = await fetch(`${baseUrl}/api/movies/${id}`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      Cookie: cookieHeader,
    },
  }).then((res) => res.json());

  const { title, posterImage } = response.data;
  const s3PosterImage = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${posterImage}`

  return {
    title: `Edit Movie - ${title}`,
    description: `Edit details for the movie: ${title}`,
    openGraph: {
      title: `Edit Movie - ${title}`,
      description: `Edit details for the movie: ${title}`,
      images: [
        {
          url: s3PosterImage || "/default-movie.jpg", // Fallback to a default image if none exists
          width: 1200,
          height: 630,
          alt: `${title} Poster`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Edit Movie - ${title}`,
      description: `Edit details for the movie: ${title}`,
      images: [s3PosterImage || "/default-movie.jpg"], // Fallback to a default image if none exists
    },
  };
}

async function EditMoviePage({ params }: { params: { id: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const cookieHeader = cookies().toString();
  const id = params.id;

  const response = await fetch(`${baseUrl}/api/movies/${id}`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      Cookie: cookieHeader,
    },
  }).then((res) => res.json());

  const movie = response.data;

  return (
    <>
      <Suspense fallback={<MovieFormLoading />}>
        <MovieForm movie={movie} />
      </Suspense>
    </>
  );
}

export default EditMoviePage;
