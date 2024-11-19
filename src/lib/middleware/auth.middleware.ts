import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your_secret_key'; // Your secret key

// Middleware to validate JWT token
export const verifyAuth = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    console.log("Inside muddleware triggered by auth: ", req.url)
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from 'Bearer token'
  console.log("Token: ", token)

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET) as { userId: string }; // Decode the token
    req.user = decoded; // Attach the user info to the request
    next(); // Proceed to the actual route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export const config = {
    matcher: '/api/movies/:id'
  }