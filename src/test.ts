// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';
// import { getUserByEmail } from './services/user.service';
// import dbConnect from './lib/dbConnect';

// // Middleware function to authenticate and validate the token
// export async function middleware(request: NextRequest) {
//     await dbConnect();
//   // Step 1: Extract the token from the Authorization header or cookies
//   const token = request.headers.get('Authorization');

//   if (!token) {
//     return NextResponse.json({ success: false, message: 'Access token is missing' }, { status: 401 });
//   }

//   try {
//     // Step 2: Verify the JWT Token
//     const decoded = await verifyToken(token, JWT_TYPE_ENUM.ACCESS);
    
//     // Step 3: Check if the token is expired (JWT has an "exp" claim that we can use)
//     if (decoded.exp < Date.now() / 1000) {
//       return NextResponse.json({ success: false, message: 'Token has expired' }, { status: 401 });
//     }

//     // Step 4: Check if the user exists in the database
//     const user = await getUserByEmail('saurav@gmail.com')
    
//     // console.log("User: ", {user: "asd"}, user);
//     if (!false) {
//       return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
//     }

//     // Step 5: Attach user to request (optional, you can use it in the route handler)
//     request.user = user;

//     // Step 6: Continue to the next middleware or handler
//     return NextResponse.next();
//   } catch (error) {
//     // Handle errors (invalid token, expired token, etc.)
//     console.error('Error during token verification:', error);
    
//     // Return unauthorized error if any exception occurs
//     return NextResponse.json({ success: false, message: 'Invalid or expired token' }, { status: 401 });
//   }
// }

// // Add the config to apply middleware to specific routes or API endpoints
// export const config = {
//   matcher: ['/api/movies/add'], 
// };
