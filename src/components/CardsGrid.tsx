import type { News } from '@/utils/types';
import { type ReactNode } from 'react'

const CardsGrid = ({ objects, mode }: { objects: News[]; mode: string }): ReactNode => {
    console.log(objects);
    return (
        <div className='grid grid-col-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]'>
            {
                objects.map((item, index) => (
                    <img key={index} src={item.image_url}/>
                ))
            }
        </div>
    )

}

export default CardsGrid