import { handleError } from "@/lib/errorHandler";
import { authGuard } from "@/lib/guards/auth.guard";
import { addMovieSchema } from "@/lib/validations/movie/movie.validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const body = await request.json();

        // Update users
        const user = await authGuard(request)

        console.log("User: ", user);


        // Parse the movie input json
        // const {posterUrl, releaseYear, title} = addMovieSchema.parse(body);

        // Add this data in db
        

        return NextResponse.json({'hello': "asda"}, {status: 200});
    } catch (error) {
        console.log(error, "\n\n\n");
        return handleError(error)
    }
}


