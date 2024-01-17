import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
        <div className='w-full h-[70px] py-2 flex justify-between items-center px-5'>
            <div>
                <Image src={'/logo.png'} width={55} height={55} alt="..." priority />
            </div>
            <div className='flex justify-center items-center gap-4 text-sm font-semibold'>
                <Link href={'/'}>About Me</Link>
                <Link href={'/skill'}>Skills</Link>
                <Link href={'/project'}>Project</Link>
            </div>
            <div className=''>
                <button className='bg-indigo-600 p-3 font-semibold text-white rounded text-sm'>Resume</button>
            </div>
        </div>
    </>
  )
}

export default Navbar