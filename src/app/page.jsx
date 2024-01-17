"use client"
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'

export default function Home() {
  // useEffect(() => {
  //   window.document.addEventListener('contextmenu', function (e) {
  //     e.preventDefault();
  //   });

  //   window.document.onkeydown = (e) => {
  //     if (e.key == 123) {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.key == 'I') {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.key == 'C') {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.key == 'J') {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.key == 'U') {
  //       e.preventDefault();
  //     }
  //   };
  // }, [])
  return (
    <>
      <div className='w-full md:h-[calc(100vh-70px)] h-full flex justify-center items-center'>
        <div className="w-5/6 h-full flex md:flex-row flex-col-reverse justify-between items-center">
          <div className='md:w-2/5 w-full h-full flex justify-center items-start flex-col relative'>
            <h1 className='text-4xl font-sans leading-10'>
              Hello i'am
              <span className='ml-2 font-semibold'>
                vodaCode.
              </span>
              <br />
              Frontend Developer
              <br />
              Based in
              <span className='ml-2 font-bold'>
                Indonesia
              </span>
            </h1>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse, reiciendis aliquam inventore saepe amet ea sed distinctio ipsam facilis nemo tempore officiis quod fugit.
            </p>
            <div className='md:absolute bottom-3 flex justify-center items-center py-4 gap-2'>
              <Link href={'https://www.instagram.com/cuma_voda'} className='p-3 hover:bg-primary hover:text-black text-primary border border-primary duration-200 rounded cursor-pointer'>
                <FaInstagram />
              </Link>
              <Link href={'wa.me/628115762211'} className='p-3 hover:bg-primary hover:text-black text-primary border border-primary duration-200 rounded cursor-pointer'>
                <FaWhatsapp />
              </Link>
              <Link href={'https://github.com/vodapermadi'} className='p-3 hover:bg-primary hover:text-black text-primary border border-primary duration-200 rounded cursor-pointer'>
                <FaGithub />
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 w-full h-full flex justify-center items-center'>
            <Image src={'/icon.png'} width={400} height={400} priority className='w-[400px] h-auto object-cover' alt='...' />
          </div>
        </div>
      </div>
    </>
  )
}