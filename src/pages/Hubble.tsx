import { CardsGrid, Overview, Title } from '@/components'
import Filters from '@/components/Filters'
import { datastroCustomFetch } from '@/utils/customFetch'
import type { FiltersParams, HubbleImagesResponse, HubbleImagesResponseWithParams } from '@/utils/types'
import React from 'react'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'

const hubbleParams = {
  order_by: "photo_date_taken desc",
  limit: 24
}

export const hubblePageLoader: LoaderFunction = async ({request}): Promise<HubbleImagesResponseWithParams | null> => {
  try {

    const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
    console.log(new URL(request.url).searchParams.entries());
    
    const formattedParams = {
      where: params?.term ? `photo_title like '${params.term}'`: "",
      ...hubbleParams,
    };

    const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: formattedParams });


    return {response : response.data, params };

  } catch (error) {
    console.log(error);
    return null;
  }
}

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponseWithParams;
  const {response, params} = data;

  return (
    <section className='section'>

      <Title text='Hubble telescope photos' />
      <Filters term={params?.term} mode="hubble" key={params?.term}/>
      <Overview objects={response} />
      <CardsGrid objects={response} mode="hubble-page"/>
    </section>
  )
}

export default Hubble