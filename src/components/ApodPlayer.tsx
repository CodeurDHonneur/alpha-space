import type { ApodType } from '@/utils/types'
import React from 'react'

const ApodPlayer = ({ apod }: { apod: ApodType }) => {
    const { copyright, date, explanation, media_type, title, url } = apod;
    console.log(copyright)
    return (
        <>
            <div className=''>
                <div className='h-[400px] w-full'>
                    {
                        media_type === "video" ? (
                            <iframe height="100%" width="100%" src={url} />
                        ) : (
                            <img 
                                src={url}
                                alt="apod-img"
                                className='h-full w-full object-cover' />
                        )
                    }
                </div>
            </div>
            <div className='capitalize text-center text-2xl'>{date.toString()}</div>
            <div className='mx-auto w-full my-8'>
                    <p className='capitalize text-2xl mb-2' >{title}</p>
                    <p>{explanation}</p>
                    <p className='capitalize mt-4 text-right'>{copyright}</p>
                    <p className='capitalize text-right'>{date.toString()}</p>
            </div>
        </>
    )
}

export default ApodPlayer