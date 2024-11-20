import { NextRequest, NextResponse } from "next/server";
import { generatePresignedUrl } from "@/lib/utils/aws/aws.utils";
import { presignedUrlSchema } from "@/lib/validations/s3/presignedurl.validation";
import { authGuard } from "@/lib/guards/auth.guard";
import { handleError } from "@/lib/errorHandler";

export async function POST(request: NextRequest) {
  try {
    // Check if the user is authenticated
    const user = await authGuard(request)

    // Parse and validate the request body
    const body = await request.json();
    const validatedBody = presignedUrlSchema.parse(body);

    const { objectKey, operation, expiresIn } = validatedBody;

    // Generate the pre-signed URL using the utility function
    const url = await generatePresignedUrl(process.env.AWS_S3_BUCKET_NAME as string, `${user._id}/${objectKey}`, operation, expiresIn);

    // Return the generated URL
    return NextResponse.json({ url });
  } catch (error) {
    return handleError(error)
  }
}
