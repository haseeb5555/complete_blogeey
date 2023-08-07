"use client"

import React ,{useContext ,useState,useEffect}from 'react'
import Link from 'next/link'

import { getCategories } from '../services';
  
const Header = () => {
  const [active,setActive] =useState('')
  const [toggle, setToggle] = useState(false)
  const [categories, setCategories] = useState([]);
  const reverseCategories =[...categories].reverse()
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b-2 w-full inline-block border-[#1F1F22]  py-8">
            <div className="md:float-left block">
              <Link href="/">
                <span className="cursor-pointer font-bold text-4xl text-white">Blogeey</span>
              </Link>
            </div>
            <div className="hidden md:float-left md:contents">
              {reverseCategories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}><span className={`${active === category.name? 'text-[#877EFF]':'text-white'} md:float-right mt-2 align-middle  text-white ml-4 font-normal cursor-pointer hover:text-gray-500`}  onClick={()=>setActive(category.category)}>{category.name}</span></Link>
              ))}

            </div>
            <div className='lg:hidden md:hidden flex flex-1 justify-end items-center mt-[-30px]'>
               <img src={toggle ? '/close.svg' :'/menu.svg'}alt="menu" className='w-[28px] h-[28px] mt-[-7px] object-contain cursor-pointer'
               onClick={()=>setToggle(!toggle)}
               />
                <div className={`${!toggle ? 'hidden':'flex'}  bg-[#1F1F22] p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
                min-w-[140px] z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col gap-4 '>
                 {categories.map((category,index)=>(
                  <Link key={index} 
                   href={`/category/${category.slug}`}
                  className={`${active === category.name ? 'text-white':'text-[#877EFF]'} hover:text-white font-medium text-[18px] cursor-pointer`}
                  onClick={()=>{ 
                    setToggle(!toggle)
                    setActive(category.name)} 
                    }
                  >
                     <span className="md:float-right mt-2 align-middle  text-white ml-4 font-normal cursor-pointer">{category.name}</span>
                  </Link>
                 ))}
             </ul>
             </div>
                </div>
          </div>
        </div>
      );
}

export default Header
