"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectPage = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center my-6'>
        <div className='w-5/6 flex flex-col justify-center items-center bg-primary rounded-lg'>
          <div className="w-full flex md:flex-row flex-col justify-between items-center p-8 gap-2">
            <Link href={'https://gabut-nime.vercel.app/'} className='md:w-1/2 w-full'>
              <Image src={'/project1.png'} width={400} height={400} className='w-full h-auto rounded-md' priority alt='...' />
            </Link>
            <div className='md:w-1/2 w-full text-black'>
              <h1 className='font-bold text-2xl'>01 .</h1>
              <span className='font-semibold text-xl'>Gabut Nime</span>
              <p>
                Membuat program web menggunakan endpoint api jikannime, menggunakan teknologi nextjs 13
              </p>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center p-8 gap-2">
            <div className='md:w-1/2 w-full text-black text-start'>
              <h1 className='font-bold text-2xl'>02 .</h1>
              <span className='font-semibold text-xl'>Fake Store</span>
              <p>Membuat program web menggunakan endpoint api fakestoreapi, menggunakan teknologi reactjs</p>
            </div>
            <Link href={'https://vodapermadi.github.io/fake-store-api/'} className='md:w-1/2 w-full'>
              <Image src={'/project2.png'} width={400} height={400} className='w-full h-auto rounded-md' priority alt='...' />
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectPage