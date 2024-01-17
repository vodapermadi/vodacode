import React from 'react'
import { FaJava, FaPython, FaTerminal } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiCanva, SiFigma, SiNodedotjs, SiPhp, SiVisualstudiocode } from "react-icons/si";

const SkillPage = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-5/6 mt-6 text-center'>
                    <h1 className='font-semibold text-2xl'>Skill</h1>
                </div>
                <div className='w-5/6 mt-4 grid md:grid-cols-4 grid-cols-2 gap-4'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-black text-primary duration-200 hover:bg-primary border border-primary'>
                            <FaPython size={50} />
                            <span className='font-semibold '>Python</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-black text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <DiJavascript1 size={50} />
                            <span className='font-semibold'>Javascript</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-black text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <SiPhp size={50} />
                            <span className='font-semibold'>PHP</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-black text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <SiNodedotjs size={50} />
                            <span className='font-semibold'>NodeJs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center my-4'>
                <div className='w-5/6 mt-6 text-center'>
                    <h1 className='font-semibold text-2xl'>Tools</h1>
                </div>
                <div className='w-5/6 mt-4 grid sm:grid-cols-3 grid-cols-2 gap-4'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-black text-primary duration-200 hover:bg-primary border border-primary'>
                            <SiVisualstudiocode size={50} />
                            <span className='font-semibold '>VSCode</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-black text-primary duration-200 hover:bg-primary border border-primary'>
                            <SiFigma size={50} />
                            <span className='font-semibold whitespace-nowrap'>Figma</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-black text-primary duration-200 hover:bg-primary border border-primary'>
                            <SiCanva size={50} />
                            <span className='font-semibold '>Canva</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillPage