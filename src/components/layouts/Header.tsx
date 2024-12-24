import Link from 'next/link'
import React from 'react'

const menus=[
    {label:"Page 1",link:"/page1"},
    {label:"Page 2",link:"/page2"},
    {label:"Page 3",link:"/page3"},

]
export default function Header() {
  return (
    <div className='flex justify-center items-center gap-5'>
        {menus.map((menu,i)=>{
            return(
              <Link
              key={i}
              href={menu?.link}
              >
                {menu?.label}
              </Link>
            )
        })

        }
    </div>
  )
}
