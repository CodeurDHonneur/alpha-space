import { links, type Link } from '@/utils/links'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LinksDesktop = () => {
  return (
    <div className='hidden w-full lg:flex gap-x-[5rem] justify-center items-center text-white'>
        {
            links.map((link, index) => {
                const {ref, label} = link as Link;
                return <NavLink 
                to={ref} 
                key={index} 
                className={
                  ({isActive}) => `capitalize tracking-wide 
                  ${isActive ? "underline text-xl" : ""}`
                }>
                  {label}
                </NavLink>
            })
        }
    </div>
  )
}

export default LinksDesktop