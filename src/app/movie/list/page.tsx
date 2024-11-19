import React from 'react'
import Card from '@/components/ui/card'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

function MovieList() {
    const data: { id: string, posterUrl: string, title: string, releaseYear: number }[] = [{
        id: "1",
        posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
        title: "Movie title",
        releaseYear: 2021
    }, {
        id: "2",
        posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
        title: "Movie title",
        releaseYear: 2021
    },
    {
        id: "3",
        posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
        title: "Movie title",
        releaseYear: 2021
    },
    {
        id: "4",
        posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
        title: "Movie title",
        releaseYear: 2021
    },
    {
        id: "5",
        posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
        title: "Movie title",
        releaseYear: 2021
    }]
    return (
        <div className='w-full h-full flex justify-center mt-10'>
            <div className='w-[90%] h-full'>
                {/* Header */}
                <div className='text-primary-foreground flex items-center justify-between'>
                    <div className='flex items-center '>
                        <div className='text-5xl font-semibold mr-3'>
                            My movies
                        </div>
                        <div className='mt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 hover:cursor-pointer hover:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
                            </svg>
                        </div>

                    </div>
                    <div className='font-[700] text-[16px] hover:cursor-pointer'>
                        Logout
                        {/* TODO: Add icon here */}
                    </div>
                </div>
                {/* List */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mt-10'>
                    {
                        data.length > 0 && data.map(({ id, posterUrl, title, releaseYear }) => {
                            return <Card key={id} posterUrl={posterUrl} title={title} releaseYear={releaseYear} />
                        })
                    }
                </div>
                {/* Pagination */}
                <div>
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
    )
}

export default MovieList