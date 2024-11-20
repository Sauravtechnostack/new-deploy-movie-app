import { JWT_TYPE_ENUM } from "@/lib/constants/enums/common.enum";
import connectDB from "@/lib/dbConnect";
import { verifyToken } from "@/lib/utils/auth/jwt.utils";
import { getUserById } from "@/services/user.service";
import { cookies } from "next/headers";

export async function getUserFromToken() {
    try {
        await connectDB();
        const cookie = await cookies();
        const token = cookie.get("accessToken");

    if (!token) {
        throw new Error("No token found");
    }

    const decodedToken = await verifyToken(token.value, JWT_TYPE_ENUM.ACCESS);

    if (!decodedToken) {
        throw new Error("Invalid token");
    }

    const user = await getUserById(decodedToken.userId);

    if (!user) {
        throw new Error("User not found");
    }

        return user;
    } catch (_error: unknown) {
        return null;
    }
} 