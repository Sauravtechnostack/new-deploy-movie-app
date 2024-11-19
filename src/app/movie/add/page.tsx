import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import React from "react";

function AddNewMovie() {
  return (
    <div className="container py-10 lg:py-20">
      <div className="text-primary-foreground font-semibold text-[32px] lg:text-[48px] mb-5 lg:mb-20">
        Create a new movie
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <ImageUpload />
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-[375px] mt-[20px]">
          <div className="mb-64">
            <Input placeholder="Title" type="text" className="w-full mb-24" />
            <Input
              placeholder="Publishing year"
              type="year"
              className="w-full lg:w-2/4"
            />
          </div>
          <div className="flex gap-[16px]">
            <Button variant="secondary" size="sm" className="w-1/2">
              Cancel
            </Button>
            <Button variant="default" size="sm" className="w-1/2">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewMovie;
