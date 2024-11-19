// lib/errorHandler.ts
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export function handleError(error: any) {
  if (error instanceof ZodError) {
    // Zod validation errors
    const formattedErrors = error.errors.map(err => ({
      path: err.path.join('.'),
      message: err.message,
    }));

    return NextResponse.json({
      success: false,
      message: 'Validation Error',
      errors: formattedErrors,
    },
      { status: 400 }
    );
  } else if (error instanceof Error) {
    // General errors
    console.log("INSIDE \n\n\n\n\n\n\n\n")
    return NextResponse.json({
      success: false,
      message: error.message || "Internal server error",
    },
      { status: 500 }
    );
  } else {
    // Unexpected error type
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',
    },
      { status: 500 }
    );
  }
}
