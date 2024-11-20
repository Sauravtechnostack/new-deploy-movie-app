"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { redirect } from "next/navigation";
import { useUserStore } from "@/store/user-store";
import Link from "next/link";

function DashboardEmptyState() {
  const { user } = useUserStore();
  console.log(user);
  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="font-semibold text-center p-[20px] text-[32px] lg:text-5xl text-primary-foreground mb-40">
          Your movie list is empty
        </div>
        <div>
          <Link href="movie/add">
            <Button size="sm">
              Add a new movie
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardEmptyState;
