"use client"
import React from "react";

function MovieFormLoading() {
  return (
    <div>
      <div className="container py-10 lg:py-20 animate-in fade-in-50">
        <div className="h-12 lg:h-14 w-64 bg-muted rounded-lg mb-5 lg:mb-20" />
        <div className="flex flex-wrap">
          {/* Image upload area shimmer */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square w-full max-w-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted/80 animate-pulse" />
            </div>
          </div>

          {/* Form fields shimmer */}
          <div className="w-full lg:w-1/2 lg:max-w-[375px] mt-[20px]">
            <div className="mb-64">
              {/* Title input shimmer */}
              <div className="w-full h-10 bg-muted rounded-md animate-pulse" />

              {/* Year input shimmer */}
              <div className="w-1/2 h-10 bg-muted rounded-md animate-pulse mt-24" />
            </div>

            {/* Buttons shimmer */}
            <div className="flex gap-[16px]">
              <div className="w-1/2 h-9 bg-muted rounded-md animate-pulse" />
              <div className="w-1/2 h-9 bg-primary/20 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieFormLoading;
