import { NextRequest } from "next/server";
import dbConnect from "../dbConnect";
import { verifyToken } from "../utils/auth/jwt.utils";
import { JWT_TYPE_ENUM } from "../constants/enums/common.enum";
import { getUserById } from "@/services/user.service";
import CustomError from "../customError";
import { IUser } from "@/models/user";

// Middleware function to authenticate and validate the token
export async function authGuard(request: NextRequest): Promise<IUser> {
  // Connect to db.
  await dbConnect();

  // Step 1: Extract the token from the Authorization header or cookies
  const token = request.headers.get("Authorization");

  console.log("Token: ", token);

  if (!token) {
    throw new CustomError("Access token is missing.", 400);
  }

  // Step 2: Verify the JWT Token
  const decode = verifyToken(token, JWT_TYPE_ENUM.ACCESS);

  if (!decode) {
    throw new CustomError("Invalid token.", 400, true);
  }

  if(decode.exp < new Date()){
    throw new CustomError('Token expired.', 400, true)
  }

  // Step 3: Check if the user exists in the database
  const user = await getUserById(decode.userId);

  if (!user) {
    throw new CustomError("User not found", 404, true);
  }

  return user as IUser;
}
