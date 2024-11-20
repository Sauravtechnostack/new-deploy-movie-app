"use client";

import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  title: string;
  year: string;
  image: File | null;
};

function AddMovie() {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      title: "",
      year: "",
      image: null,
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const response = await fetch("/api/s3/presigned-url", {
      method: "POST",
      body: JSON.stringify({
        objectKey: data.image?.name,
        operation: "PUT",
        expiresIn: 60,
      }),
    }); 
    const { url } = await response.json();

    fetch(url, {
      method: "PUT",
      body: data.image,
    });

    const movieResponse = await fetch("/api/movies/add", {
      method: "POST",
      body: JSON.stringify({
        posterUrl: url,
        releaseYear: data.year,
        title: data.title,
      }),
    });

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container py-10 lg:py-20">
      <div className="text-primary-foreground font-semibold text-[32px] lg:text-[48px] mb-5 lg:mb-20">
        Create a new movie
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageUpload
                onChange={(file) => setValue("image", file)}
                value={field.value}
              />
            )}
          />
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-[375px] mt-[20px]">
          <div className="mb-64">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Title"
                  type="text"
                  className="w-full mb-24"
                />
              )}
            />
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Publishing year"
                  type="year"
                  className="w-full lg:w-2/4"
                />
              )}
            />
          </div>
          <div className="flex gap-[16px]">
            <Button variant="secondary" size="sm" className="w-1/2" type="button">
              Cancel
            </Button>
            <Button variant="default" size="sm" className="w-1/2" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddMovie;
