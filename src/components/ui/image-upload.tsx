import React from "react";

function ImageUpload() {
  return (
    <div className="w-full h-[400px] lg:w-[473px] lg:h-[504px] bg-input border border-dashed rounded-lg hover:cursor-pointer">
      <div className="w-full h-full flex flex-col justify-center items-center text-primary-foreground">
        <div className="mb-8 w-24 h-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>
        <div className="font-normal text-sm">Drop an image here</div>
      </div>
    </div>
  );
}

export default ImageUpload;
