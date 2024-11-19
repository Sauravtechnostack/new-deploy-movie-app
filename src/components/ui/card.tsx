import React from 'react'

interface CardProps {
    posterUrl: string;
    title: string;
    releaseYear: number;
}

function Card({ posterUrl, title, releaseYear }: CardProps) {
    return (
        // w-[282px] h-[504px]
        <div className='w-[282px] h-[504px] px-8 pt-8 pb-16 flex flex-col outline-none bg-card rounded-lg hover:cursor-pointer hover:bg-card-hover'>
            {/* w-[266px] h-[400px] */}
            <div className='w-[266px] h-[400px] rounded-lg'>
                <img src={posterUrl} className='w-full h-full object-cover rounded-lg' alt={title}/>
            </div>
            <div className='w-full px-8  flex flex-col justify-center text-primary-foreground text-sm font-medium'>
                <div className='leading-8 mt-16'>
                    {title}
                </div>
                <div className='text-xs mt-8 leading-6'>
                    {releaseYear}
                </div>
            </div>
        </div>
    )
}

export default Card;