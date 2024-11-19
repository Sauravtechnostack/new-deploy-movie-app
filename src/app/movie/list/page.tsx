import React from "react";
import Card from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

function MovieList() {
  const data: {
    id: string;
    posterUrl: string;
    title: string;
    releaseYear: number;
  }[] = [
    {
      id: "1",
      posterUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      title: "Movie title",
      releaseYear: 2021,
    },
    {
      id: "2",
      posterUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      title: "Movie title",
      releaseYear: 2021,
    },
    {
      id: "3",
      posterUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      title: "Movie title",
      releaseYear: 2021,
    },
    {
      id: "4",
      posterUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      title: "Movie title",
      releaseYear: 2021,
    },
    {
      id: "5",
      posterUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      title: "Movie title",
      releaseYear: 2021,
    },
  ];
  return (
    <div className="">
      <div className="container py-10 lg:py-20">
        {/* Header */}
        <div className="text-primary-foreground flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-[32px] lg:text-5xl font-semibold mr-3">
              My movies
            </div>
            <div className="mt-4">
              <Image
                src="/assets/images/add.svg"
                height={32}
                width={32}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="font-bold flex text-[16px] hover:cursor-pointer justify-end">
            <span className="mr-[16px] hidden sm:flex inline-block">
              Logout
            </span>
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
          {data.length > 0 &&
            data.map(({ id, posterUrl, title, releaseYear }) => {
              return (
                <Card
                  key={id}
                  posterUrl={posterUrl}
                  title={title}
                  releaseYear={releaseYear}
                />
              );
            })}
        </div>
        {/* Pagination */}
        <div className="py-10 lg:py-[120px]">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              {/* <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem> */}
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
