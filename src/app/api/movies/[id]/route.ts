import { handleError } from '@/lib/errorHandler';
import { verifyAuth } from '@/lib/middleware/auth.middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan' },
  { id: 2, title: 'The Matrix', director: 'Wachowskis' },
];

// // This function wraps the main handler to apply the middleware
// const withAuth = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
//   return (req: NextApiRequest, res: NextApiResponse) => {
//     verifyAuth(req, res, () => handler(req, res));
//   };
// };

// Main handler function
export async function GET(request: NextApiRequest,context: { params: { id: string } }) {

  try {
    const movieId = await context.params;
  // asda

  throw new Error("Opss")

  return NextResponse.json({ data: movieId }, { status: 200 })
    
  // throw new Error("Asda")
  } catch (error) {
    handleError(error)
  }
  
  
}
