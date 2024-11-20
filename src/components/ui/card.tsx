import React from "react";

interface CardProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
}

function Card({ posterUrl, title, releaseYear }: CardProps) {
  return (
    <div className="px-8 pt-8 pb-16 flex flex-col outline-none bg-card rounded-lg hover:cursor-pointer hover:bg-card-hover w-full">
      <img
        src={`https://next-project-image-upload-testing.s3.us-east-1.amazonaws.com/${posterUrl}`}
        className="w-full h-full min-h-[400px] object-cover rounded-lg"
        alt={title}
      />
      <div className="px-8 flex flex-col justify-center text-primary-foreground text-sm font-medium">
        <div className="leading-8 text-xl font-medium mt-16">{title}</div>
        <div className="text-sm mt-8 leading-6">{releaseYear}</div>
      </div>
    </div>
  );
}

export default Card;
