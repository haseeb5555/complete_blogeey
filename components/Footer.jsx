import React from 'react'
import  Image  from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const FooterColumn =({title,links})=>(
    <div className='flex-1 flex flex-col gap-3 text-sm min-w-max'>
      <h4 className='font-semibold text-white '>{title}</h4>
      <ul className='flex flex-col gap-2 font-normal'>
         {links.map((link)=>(
            <Link href="/" className='text-gray-100 font-normal'>
            {link}
            </Link>
         ))}
      </ul>
    </div>
)


const Footer = () => {
  return (

    <footer className='flex justify-start items-center flex-col  2xl:px-60 lg:px-20 py-6 px-5 w-full gap-20  bg-[#1F1F22]'>
       
    <div className='flex flex-col gap-12 w-full '> 
    <div className='flex items-start flex-col'>
        <h1 className='font-bold text-[#a8a2fa] text-[30px]'>Blogeey</h1>
      <p className='text-start text-sm font-normal mt-5 max-w-xs text-gray-100'>Embark on a journey of discovery with blogeey and the frontiers of technology that redefine possibilities and unravel the mysteries of our digital world.
      </p>
    </div>
    <div className='flex flex-wrap gap-12'>
     <FooterColumn
      title ={footerLinks[0].title}
      links={footerLinks[0].links}
      />
    <div className='flex-1 flex flex-col gap-4'>
    <FooterColumn
      title ={footerLinks[1].title}
      links={footerLinks[1].links}
      />
    </div>
       <FooterColumn
      title ={footerLinks[2].title}
      links={footerLinks[2].links}
      />
           
    <FooterColumn
      title ={footerLinks[3].title}
      links={footerLinks[3].links}
      />

      <div className='flex-1 flex flex-col gap-4'>
    <FooterColumn
      title ={footerLinks[4].title}
      links={footerLinks[4].links}
      />
   
    </div>
    </div>
    </div>
    <div className='flex justify-between items-center  max-sm:flex-col w-full text-sm font-normal'>
       <p className='text-gray-100'>@ 2023 Blogeey all rights reserved.</p>
       <p className='text-gray-100'>Blogeey.com</p>
    </div>
    </footer>
  )
}

export default Footer;
