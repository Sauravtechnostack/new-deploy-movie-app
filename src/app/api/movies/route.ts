import { getAllMovies } from "@/services/movie.service";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
     // Update users
     const user = await authGuard(request)

     const allMovies = await getAllMovies();
}