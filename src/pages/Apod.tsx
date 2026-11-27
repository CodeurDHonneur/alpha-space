import { Title } from '@/components'
import ApodPlayer from '@/components/ApodPlayer'
import { nasaCustomFetch } from '@/utils/customFetch'
import type { ApodType } from '@/utils/types'
import React from 'react'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'

export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
  try {
    const response = await nasaCustomFetch.get<ApodType>("");
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}


const Apod = () => {
  const defaultApod = useLoaderData() as ApodType[];
  console.log(defaultApod);


  return (
    <section className='section'>
      <Title text="NASA's astronomy picture of the day" />
      {defaultApod.map((apod, index) => <ApodPlayer apod={apod} key={index}/>) }
    </section>
  )
}

export default Apod