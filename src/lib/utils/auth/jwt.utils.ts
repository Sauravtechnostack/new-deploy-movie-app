import { JWT_TYPE_ENUM } from '@/lib/constants/enums/common.enum';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
  [key: string]: any;
}


// Secret keys from .env
const ACCESS_SECRET_KEY = process.env.JWT_ACCESS_SECRET || 'default_secret_key';
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET || 'default_refresh_secret';
const ACCESS_TOKEN_EXPIRATION = process.env.JWT_ACCESS_EXPIRATION || '1h'; // Example: 1h for 1 hour
const REFRESH_TOKEN_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION || '7d'; // Example: 7 days


/**
 * Generate a JWT token.
 * @param payload - The payload to include in the token.
 * @param type - The type of token to generate (ACCESS or REFRESH).
 * @returns The signed JWT token as a string.
 */
export const generateToken = (payload: JwtPayload, type: JWT_TYPE_ENUM): string => {
    const expiry = type === JWT_TYPE_ENUM.ACCESS ? ACCESS_TOKEN_EXPIRATION : REFRESH_TOKEN_EXPIRATION;
    const secret = type === JWT_TYPE_ENUM.ACCESS ? ACCESS_SECRET_KEY : REFRESH_SECRET_KEY;
  
    return jwt.sign(payload, secret, { expiresIn: expiry });
  };

/**
 * Verify a JWT token.
 * @param token - The JWT token to verify.
 * @param type - The type of token to verify (ACCESS or REFRESH).
 * @returns The decoded JWT payload if the token is valid.
 */
export const verifyToken = (token: string, type: JWT_TYPE_ENUM): JwtPayload => {
    try {
      const secret = type === JWT_TYPE_ENUM.ACCESS ? ACCESS_SECRET_KEY : REFRESH_SECRET_KEY;
      return jwt.verify(token, secret) as JwtPayload;
    } catch (error) {
      console.error('JWT verification failed:', error);
      throw new Error('Invalid or expired token');
    }
  };

/**
 * Decodes a JWT token without verifying its signature.
 * @param token - The JWT token to decode.
 * @returns The decoded payload or null if decoding fails.
 */
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwt.decode(token) as JwtPayload | null;
  } catch (error) {
    console.error('JWT decoding failed:', error);
    return null;
  }
};
