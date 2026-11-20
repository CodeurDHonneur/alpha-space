import type { News, NewsResponse } from '@/utils/types';
import { type ReactNode } from 'react'
import NewsPageCard from './NewsPageCard';

const CardsGrid = ({ objects, mode }: { objects: NewsResponse; mode: string }): ReactNode => {
    console.log(objects);
    return (
        <div className='grid grid-cols-1 gap-y-4 auto-rows-auto'>
        {/* <div className='grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]'>*/} 
            {
                objects.results.map((item, index) => (
                    <NewsPageCard news={item} key={index}/>
                ))
            }
        </div>
    )

}

export default CardsGrid