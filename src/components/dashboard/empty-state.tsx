"use client"
import React from 'react'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

function DashboardEmptyState() {
    return (
        <div>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='font-semibold text-5xl text-primary-foreground mb-40'>
                    Your movie list is empty
                </div>
                <div>
                    <Button size='sm' onClick={() => redirect('/movie/add')}>Add a new movie</Button>
                </div>
            </div>
        </div>
    )
}

export default DashboardEmptyState