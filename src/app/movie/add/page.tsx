import { Button } from '@/components/ui/button'
import ImageUpload from '@/components/ui/image-upload'
import { Input } from '@/components/ui/input'
import React from 'react'

function AddNewMovie() {
    return (
        <div className='w-full h-full flex justify-center items-center overflow-hidden'>
            <div className='w-[80%] h-[90%]'>
                <div className='text-primary-foreground font-semibold text-5xl mb-20'>
                    Create a new movie
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex justify-center '>
                        <ImageUpload />
                    </div>
                    <div className='w-1/2 flex flex-col items-center '>
                        <div>
                            <div className='mb-64'>
                                <Input placeholder='Title' type='text' className='w-full mb-24'/>
                                <Input placeholder='Publishing year' type='year' className='w-3/4'/>
                            </div>
                            <div>
                                <Button variant='secondary' size='sm' className='mr-3'>Cancel</Button>
                                <Button variant='default' size='sm' className='ml-3'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewMovie