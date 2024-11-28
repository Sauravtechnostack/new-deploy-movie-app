"use client"
import CardShimmer from '@/components/ui/card-shimmer'
import React from 'react'

function Loading() {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[...Array(6)].map((_, index) => (
      <CardShimmer key={index} />
    ))}
  </div>
  )
}

export default Loading