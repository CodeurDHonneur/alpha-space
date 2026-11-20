import type { NewsResponse } from '@/utils/types'
import React, { type ReactNode } from 'react'

const Overview = ({ objects }: { objects: NewsResponse }): ReactNode => {

    const number: number = objects.count;

    return (
        <div className='my-6 text-xl'>{number} matches</div>
    )
}

export default Overview;