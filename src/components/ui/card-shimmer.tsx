import React from "react";

function CardShimmer() {
  return (
    <div
      className="relative animate-in fade-in-50"
      role="status"
      aria-label="Loading movie card"
    >
      {/* Delete button shimmer */}
      <div className="absolute top-3 right-3">
        <div className="w-[36px] h-[36px] bg-muted rounded-md animate-pulse" />
      </div>

      {/* Card container */}
      <div className="px-8 pt-8 pb-16 flex flex-col bg-card rounded-lg w-full">
        {/* Image shimmer */}
        <div className="w-full min-h-[250px] h-[250px] lg:min-h-[400px] rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-muted to-muted/80 animate-pulse" />
        </div>

        {/* Content shimmer */}
        <div className="px-8 flex flex-col justify-center">
          {/* Title shimmer */}
          <div className="h-8 w-3/4 bg-muted rounded-md animate-pulse mt-16" />

          {/* Year shimmer */}
          <div className="h-6 w-24 bg-muted rounded-md animate-pulse mt-8" />
        </div>
      </div>
    </div>
  );
}

export default CardShimmer;
