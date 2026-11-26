import type { HubbleImagesResponse, NewsResponse, NewsResponseWithParams } from '@/utils/types'
import React, { type ReactNode } from 'react'

const Overview = ({ objects }: { objects: NewsResponseWithParams | HubbleImagesResponse }): ReactNode => {

    let number: number;

    if("total_count" in objects){
        number = objects.total_count;
    } else {
        number = objects.response.count;
    }

    return (
        <div className='my-6 text-xl'>{number} matches</div>
    )
}

export default Overview;