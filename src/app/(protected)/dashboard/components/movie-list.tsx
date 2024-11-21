"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useApi } from "@/hooks/useApi";
import { toast } from "@/hooks/useToast";
import DashboardEmptyState from "./empty-state";

function MoviesList() {
  const [movies, setMovies] = useState<
    {
      _id: string,
      posterImage: string;
      title: string;
      releaseYear: number;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(8);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data, error, callApi } = useApi()

  // Function to handle click on the "Add" button
  const handleAddClick = () => {
    router.push("/movie/add"); // Redirect user to the "movie/add" page
  };

  const handleDeleteCard = async (movieId: string) => {
    try {
      // Send delete request to the API
      const deleteResponse = await fetch(
        `http://localhost:3000/api/movies/${movieId}`,
        {
          method: "DELETE",
        }
      );
  
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete the movie");
      }
  
      // Refetch the updated list of movies after deletion
      const listResponse = await fetch(
        `/api/movies/list?page=${currentPage}&limit=${pageSize}`
      );
      const data = await listResponse.json();
  
      // Update the state with the new movies list
      setMovies(data.movies);
  
      // Calculate and update total pages
      const totalPages = Math.ceil(data.pagination.totalMovies / pageSize);
      setTotalPages(totalPages);
  
      console.log("Movie deleted successfully");
    } catch (error) {
      console.error("Error while deleting the movie:", error.message);
    }
  };

  const handleLogout = async () => {
    await callApi({
      url: '/api/auth/logout',
      method: "POST",
    })
  }

  useEffect(() => {
    if(data){
      router.replace('/login');
      toast({
        title: "Logged out successfully!"
      })
    }else if(error){
      toast({
        title: error || "Something went wrong."
      })
    }
  }, [data, error, router])


  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `/api/movies/list?page=${currentPage}&limit=${pageSize}`
        );
        const data = await response.json();
        setMovies(data.movies);
        const totalPages = Math.ceil(data.pagination.totalMovies / pageSize);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies(); // Fetch data whenever currentPage or pageSize changes
  }, [currentPage, pageSize]);

  if(movies.length === 0 && !loading){
    console.log("Inside")
    return <DashboardEmptyState />
  }


  return (
    <div>
      <div className="">
        <div className="container py-10 lg:py-20">
          <div className="text-primary-foreground flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-[32px] lg:text-5xl font-semibold mr-3">
                My movies
              </div>
              <div className="mt-4 cursor-pointer" onClick={handleAddClick}>
                <Image
                  src="/assets/images/add.svg"
                  height={32}
                  width={32}
                  alt=""
                ></Image>
              </div>
            </div>
            <div onClick={() => handleLogout()} className="font-bold flex text-[16px] hover:cursor-pointer justify-end">
              <span className="mr-[16px]  sm:flex inline-block">Logout</span>
              <Image
                src="/assets/images/logout.svg"
                height={24}
                width={24}
                alt=""
              ></Image>
            </div>
          </div>
          {/* List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] place-items-center mt-5 lg:mt-10">
            {loading ? (
              <div>Loading...</div> // Show loading text while fetching
            ) : (
              movies.length > 0 &&
              movies.map(({_id ,posterImage, title, releaseYear }) => (
                <Card
                  key={_id}
                  id={_id}
                  posterUrl={posterImage}
                  title={title}
                  releaseYear={releaseYear}
                  handleDeleteCard={handleDeleteCard}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="py-10 lg:py-[120px]">
            <Pagination>
              <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                  />
                </PaginationItem>

                {/* Pagination Links */}
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={index + 1 === currentPage}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
